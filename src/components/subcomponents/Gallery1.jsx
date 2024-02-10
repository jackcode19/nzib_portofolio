// import { imageScanes } from "../subcomponents/export"
// import collectionImage from "../../imageCollection"
import { useState, useEffect } from "react"
import { ref, getDownloadURL, listAll } from "firebase/storage"
import { imagesDb } from "../../firebase/firebase.Config"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"

const Gallery1 = () => {
  // const collectionScanes = collectionImage.filter((filterImage) => {
  //   return filterImage.category === "scanes"
  // })

  const [scanes, setScanes] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(imagesDb, "scanes/")
      const result = await listAll(storageRef)

      const urlPromises = result.items.map((imageRef) =>
        getDownloadURL(imageRef)
      )

      return Promise.all(urlPromises)
    }

    const loadImages = async () => {
      const urls = await fetchImages()
      setScanes(urls)
    }
    loadImages()
  }, [])

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(scanes.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === scanes.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  return (
    <div className="max-w-full mx-auto">
      <h1 className="text-white text-xl md:text-2xl mb-4">Scenes</h1>
      <div className="flex flex-wrap justify-center item-center">
        {openModal && (
          <div className="sliderWrap">
            <FontAwesomeIcon
              icon={faCircleXmark}
              fontSize={28}
              className="btnClose"
              onClick={handleCloseModal}
            />
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              fontSize={28}
              className="btnPrev"
              onClick={prevSlide}
            />
            <FontAwesomeIcon
              fontSize={28}
              icon={faCircleChevronRight}
              className="btnNext"
              onClick={nextSlide}
            />
            <div className="fullScreenImage">
              <img src={scanes[slideNumber]} alt="" />
            </div>
          </div>
        )}
        {scanes.map((imageUrl, index) => (
          <div className="md:w-1/2 lg:w-1/3 p-2">
            <div className="flex relative">
              <img
                src={imageUrl}
                onClick={() => handleOpenModal(index)}
                alt=""
                className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
              />
            </div>
          </div>
        ))}
        {/* {files.map((imageUrl) => {
          return (
            <div className="md:w-1/2 lg:w-1/3 p-2">
              <div className="flex relative">
                <img
                  src={imageUrl}
                  alt=""
                  onClick={() => handleOpenModal(index)}
                  className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                />
              </div>
            </div>
          )
        })} */}
      </div>
    </div>
  )
}
export default Gallery1
