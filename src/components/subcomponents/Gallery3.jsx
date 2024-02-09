import collectionImage from "../../imageCollection"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"

const Gallery3 = () => {
  const collectionNft = collectionImage.filter((filterImage) => {
    return filterImage.category === "nft"
  })
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
      ? setSlideNumber(collectionNft.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === collectionNft.length
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
              <img src={collectionNft[slideNumber].imageUrl} alt="" />
            </div>
          </div>
        )}
        {collectionNft &&
          collectionNft.map((slide, index) => (
            <div className="lg:w-1/3 xl:w-1/4 p-2">
              <div className="flex relative">
                <img
                  key={index}
                  src={slide.imageUrl}
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
