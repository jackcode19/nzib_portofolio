import React, { useState } from "react"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { dataDb, imagesDb, auth } from "../../firebase/firebase.Config"
import { toast } from "react-toastify"

export default function Upload() {
  const [formData, setFormData] = useState({
    category: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  })

  const [progress, setProgress] = useState(0)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }

  const handlePublish = () => {
    if (!formData.category || !formData.image) {
      alert("Isian heula bre")
      return
    }

    const storageRef = ref(
      imagesDb,
      `/${formData.category}/${formData.image.name}`
    )

    const uploadImage = uploadBytesResumable(storageRef, formData.image)

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progressPercent)
      },
      (err) => {
        console.log(err)
      },
      () => {
        setFormData({
          category: "",
          image: "",
        })

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const collectionImageRef = collection(dataDb, "Portfolio")
          addDoc(collectionImageRef, {
            category: formData.category,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast("Collection added successfully", { type: "success" })
              setProgress(0)
              window.location.reload(true)
            })
            .catch((err) => {
              toast("Error adding collection", { type: "error" })
            })
        })
      }
    )
  }
  return (
    <div className="w-full max-w-full mx-auto flex justify-center">
      <div id="gallery" className="w-full px-4 pb-28 pt-32">
        <div className="max-w-full text-center mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl text-slate-100">Upload</h2>
        </div>

        <div className="w-full px-4 max-w-xl mx-auto">
          <form>
            <div className="px-4 mb-4">
              <label
                htmlFor=""
                className="font-semibold text-slate-100 mb-2 inline-block"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
                class="w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow"
              ></input>
            </div>
            <div className="px-4 mb-4">
              <label
                htmlFor=""
                className="font-semibold text-slate-100 mb-2 inline-block"
              >
                Category
              </label>
              <input
                name="category"
                value={formData.category}
                onChange={(e) => handleChange(e)}
                class="w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow"
              ></input>
            </div>
            {progress === 0 ? null : (
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped mt-2"
                  style={{ width: `${progress}%` }}
                >
                  {`uploading image ${progress}%`}
                </div>
              </div>
            )}
            <div className="px-4">
              <button
                type="button"
                onClick={handlePublish}
                className="bg-transparent border border-primaryYellow text-primaryYellow rounded-md py-2 px-6 font-medium hover:bg-primaryYellow hover:text-white"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
