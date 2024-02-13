import { deleteDoc, doc } from "firebase/firestore"
import React from "react"
import { dataDb, imagesDb } from "../../firebase/firebase.Config"
import { toast } from "react-toastify"
import { deleteObject, ref } from "firebase/storage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export default function Deleted({ id, imageUrl }) {
  const handleDelete = async () => {
    if (window.confirm("Yakin ingin dihapus?")) {
      try {
        await deleteDoc(doc(dataDb, "Portfolio", id))
        toast("Images deleted successfully", { type: "success" })
        const storageRef = ref(imagesDb, imageUrl)
        await deleteObject(storageRef)
      } catch (error) {
        toast("Error deleting article", { type: "error" })
        console.log(error)
      }
    }
  }
  return (
    <div className="">
      <button
        type="submit"
        className="bg-red-500 px-4 py-1 rounded-md hover:text-white hover:bg-red-600"
        onClick={handleDelete}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  )
}
