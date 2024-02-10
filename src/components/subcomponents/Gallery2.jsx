import collectionImage from "../../imageCollection"
import { useState, useEffect } from "react"
import { ref, getDownloadURL, listAll } from "firebase/storage"
import { imagesDb } from "../../firebase/firebase.Config"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"

const Gallery2 = () => {
  // const collectionSprites = collectionImage.filter((filterImage) => {
  //   return filterImage.category === "sprites"
  // })

  const [sprites, setSprites] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(imagesDb, "sprites/")
      const result = await listAll(storageRef)

      const urlPromises = result.items.map((imageRef) =>
        getDownloadURL(imageRef)
      )

      return Promise.all(urlPromises)
    }

    const loadImages = async () => {
      const urls = await fetchImages()
      setSprites(urls)
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
      ? setSlideNumber(sprites.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === sprites.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  return (
    <div className="max-w-full mx-auto">
      <h1 className="text-white text-xl md:text-2xl mb-4">Sprites</h1>
      <div className="flex flex-wrap justify-center">
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
              <img src={sprites[slideNumber]} alt="" />
            </div>
          </div>
        )}
        {sprites.map((imageUrl, index) => (
          <div className="md:w-1/2 lg:w-1/3 p-2">
            <div className="flex relative">
              <img
                key={index}
                src={imageUrl}
                alt=""
                onClick={() => handleOpenModal(index)}
                className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Gallery2
