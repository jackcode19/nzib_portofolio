import { useState } from "react"
import { Gallery1, Gallery2, Gallery3 } from "./subcomponents/export"

const Gallery = () => {
  const [toggle, setToggle] = useState(1)

  function updateTabs(id) {
    setToggle(id)
  }

  return (
    <div id="gallery" className="w-full px-4 pb-16 pt-28">
      <div className="max-w-full text-center mx-auto mb-10">
        <h2 className="text-4xl sm:text-6xl text-slate-100 font-pixelF">
          Gallery
        </h2>
      </div>
      <div className="p-4 md:py-4 mb-4">
        <ul className="text-white list-none flex justify-center items-center ">
          <li
            className={`bg-main font-semibold py-2 rounded-sm shadow-lg px-4 cursor-pointer text-sm mr-1 ${
              toggle === 1 ? "active-tabs" : ""
            }`}
            onClick={() => updateTabs(1)}
          >
            Scenes
          </li>
          <li
            className={`bg-main font-semibold py-2 rounded-sm shadow-lg px-4 cursor-pointer text-sm mr-1 ${
              toggle === 2 ? "active-tabs" : ""
            }`}
            onClick={() => updateTabs(2)}
          >
            Sprites
          </li>
          <li
            className={`bg-main font-semibold py-2 rounded-sm shadow-lg px-4  cursor-pointer text-sm ${
              toggle === 3 ? "active-tabs" : ""
            }`}
            onClick={() => updateTabs(3)}
          >
            NFT PFP
          </li>
        </ul>
      </div>

      <div className="w-full px-4">
        <div className={toggle === 1 ? "show-tabs" : "hide-tabs"}>
          <Gallery1 />
        </div>
        <div className={toggle === 2 ? "show-tabs" : "hide-tabs"}>
          <Gallery2 />
        </div>
        <div className={toggle === 3 ? "show-tabs" : "hide-tabs"}>
          <Gallery3 />
        </div>
      </div>
    </div>
  )
}
export default Gallery
