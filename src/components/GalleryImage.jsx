import { useState, useEffect } from "react"
import { ref, getDownloadURL, listAll } from "firebase/storage"
import { imagesDb } from "../firebase/firebase.Config"

import collectionImage from "../imageCollection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"

const GalleryImage = () => {
  const [image, setImage] = useState(
    collectionImage.filter((filterImage) => {
      return filterImage.category === "scanes"
    })
  )

  const filterCollection = (categoryImage) => {
    const updateImage = collectionImage.filter((filterImage) => {
      return filterImage.category === categoryImage
    })

    setImage(updateImage)
  }

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
      ? setSlideNumber(image.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === image.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  const collectionScanes = collectionImage.filter((filterImage) => {
    return filterImage.category === "scanes"
  })

  // const [imgUrl, setImgUrl] = useState([])

  // useEffect(() => {
  //   listAll(ref(imagesDb, "scanes/")).then((imgs) => {
  //     console.log(imgs)
  //     imgs.items.forEach((val) => {
  //       getDownloadURL(val).then((url) => {
  //         setImgUrl((data) => [...data, url])
  //       })
  //     })
  //   })
  // }, [])

  const [files, setFiles] = useState([])

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
      setFiles(urls)
    }
    loadImages()
  }, [])

  // console.log(files)

  return (
    <div id="gallery" className="w-full px-4 pb-28 pt-32">
      <div className="max-w-full text-center mx-auto mb-10">
        <h2 className="text-4xl sm:text-6xl text-slate-100 font-pixelF">
          Gallery
        </h2>
      </div>
      <div className="md:py-4 mb-4">
        <ul className="list-none text-slate-100 flex justify-center items-center ">
          <li
            className={`bg-main font-semibold py-2 rounded-sm shadow-lg px-4 cursor-pointer text-sm mr-1 ${
              filterCollection === "scanes" ? "active-tabs" : ""
            }`}
            onClick={() => filterCollection("scanes")}
          >
            Scenes
          </li>
          <li
            className="bg-main font-semibold py-2 rounded-sm shadow-lg px-4 cursor-pointer text-sm mr-1"
            onClick={() => filterCollection("sprites")}
          >
            Sprites
          </li>
          <li
            className={`bg-main font-semibold py-2 rounded-sm shadow-lg px-4 cursor-pointer text-sm mr-1 ${
              filterCollection === "nft" ? "active-tabs" : ""
            }`}
            onClick={() => filterCollection("nft")}
          >
            NFT PFP
          </li>
        </ul>
      </div>

      <div className="w-full px-4">
        <div className="">
          <div className="max-w-full mx-auto">
            <h1 className="text-white text-xl md:text-2xl mb-4"></h1>
            <div className="flex flex-wrap justify-center item-center">
              {/* {openModal && (
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
                    <img src={image[slideNumber].imageUrl} alt="" />
                  </div>
                </div>
              )}
              {image.map((slide, index, category) => {
                const { imageUrl } = slide
                return (
                  <div className="md:w-1/2 lg:w-1/3 p-2">
                    <div className="flex relative">
                      <img
                        key={index}
                        src={slide.imageUrl}
                        alt=""
                        onClick={() => handleOpenModal(index)}
                        className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                      />
                    </div>
                  </div>
                )
              })} */}
              {files.map((imageUrl) => {
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
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryImage
