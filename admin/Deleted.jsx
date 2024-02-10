import { deleteDoc, doc } from "firebase/firestore"
import React from "react"
import { dataDb, imagesDb } from "../src/firebase/firebase.Config"
import { toast } from "react-toastify"
import { deleteObject, ref } from "firebase/storage"

export default function DeleteImage({ id, imageUrl }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
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
    <div>
      <button
        type="submit"
        className="bg-transparent border border-primaryYellow text-primaryYellow rounded-md py-2 px-6 font-medium hover:bg-primaryYellow hover:text-white"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  )
}
