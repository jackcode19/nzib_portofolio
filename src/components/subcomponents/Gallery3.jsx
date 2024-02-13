import { useState, useEffect } from "react"
import { imagesDb } from "../../firebase/firebase.Config"
import { ref, getDownloadURL, listAll } from "firebase/storage"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"

const Gallery3 = () => {
  // const collectionNft = collectionImage.filter((filterImage) => {
  //   return filterImage.category === "nft"
  // })

  const [nft, setNft] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(imagesDb, "nft/")
      const result = await listAll(storageRef)

      const urlPromises = result.items.map((imageRef) =>
        getDownloadURL(imageRef)
      )

      return Promise.all(urlPromises)
    }

    const loadImages = async () => {
      const urls = await fetchImages()
      setNft(urls)
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
      ? setSlideNumber(nft.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === nft.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }
  return (
    <div className="max-w-full mx-auto">
      <h1 className="text-white text-xl md:text-2xl mb-4">NFT PFP</h1>
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
              <img src={nft[slideNumber]} alt="" />
            </div>
          </div>
        )}
        {nft.map((imageUrl, index) => (
          <div className="lg:w-1/3 xl:w-1/4 p-2">
            <div className="flex relative">
              <img
                key={index}
                src={imageUrl}
                onClick={() => handleOpenModal(index)}
                alt=""
                className="inset-0 w-full h-70 opacity-75 hover:opacity-100 cursor-pointer rounded-sm object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Gallery3
