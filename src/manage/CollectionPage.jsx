import { imagesDb } from "../firebase/firebase.Config"
import { dataDb } from "../firebase/firebase.Config"
import { collection } from "firebase/firestore"
import { GalleryImage } from "../components/index"

function CollectionPage() {
  return (
    <div className="min-h-screen bg-main bg-fixed pt-32">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className=""></div>
          <div className="w-full lg:w-1/2 lg:mx-auto">
            <form>
              <div className="px-4 mb-4">
                <label
                  htmlFor=""
                  className="font-semibold text-slate-100 mb-2 inline-block"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  class="w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow"
                ></input>
              </div>
              <div className="px-4 mb-4">
                <label
                  htmlFor=""
                  className="font-semibold text-slate-100 mb-2 inline-block"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  class="w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow"
                ></input>
              </div>
              <div className="px-4 mb-4">
                <label
                  htmlFor=""
                  className="font-semibold text-slate-100 mb-2 inline-block"
                >
                  Mesagge
                </label>
                <textarea
                  type="text"
                  name="message"
                  class="w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow h-32"
                ></textarea>
              </div>
              <div className="px-4">
                <button
                  type="submit"
                  className="bg-transparent border border-primaryYellow text-primaryYellow rounded-md py-2 px-6 font-medium hover:bg-primaryYellow hover:text-white"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <GalleryImage />
    </div>
  )
}
export default CollectionPage
