import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import React, { useState, useEffect } from "react"
import { dataDb } from "../../firebase/firebase.Config"
import Delete from "./Deleted"

export default function AllCollection() {
  const [collectionImage, setCollectionImage] = useState([])
  useEffect(() => {
    const collectionImageRef = collection(dataDb, "Portfolio")
    const q = query(collectionImageRef, orderBy("createdAt", "desc"))
    onSnapshot(q, (snapshot) => {
      const collectionImage = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setCollectionImage(collectionImage)
      console.log(collectionImage)
    })
  }, [])

  const filterCollection = (categoryImage) => {
    const updateImage = collectionImage.filter((filterImage) => {
      return filterImage.category === categoryImage
    })

    setCollectionImage(updateImage)
  }

  const collectionScanes = collectionImage.filter((filterImage) => {
    return filterImage.category === "scanes"
  })

  const collectionSprites = collectionImage.filter((filterImage) => {
    return filterImage.category === "sprites"
  })

  const collectionNft = collectionImage.filter((filterImage) => {
    return filterImage.category === "nft"
  })

  const [toggle, setToggle] = useState(1)

  function updateTabs(id) {
    setToggle(id)
  }

  return (
    <div className="">
      <div id="gallery" className="w-full px-4 pb-28 pt-32">
        <div className="max-w-full text-center mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl text-slate-100">
            All Collection
          </h2>
        </div>
        <div className="md:py-4 mb-4">
          <ul className="list-none text-slate-100 flex justify-center items-center ">
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
            <div className="w-full mx-auto mb-16">
              <h1 className="text-white text-xl md:text-2xl mb-4">Scanes</h1>
              <div className="flex flex-wrap justify-center item-center text-slate-100">
                {collectionScanes.map(({ imageUrl, category, id }) => {
                  return (
                    <div className="md:w-1/2 lg:w-1/4 p-2">
                      <div className="flex relative mb-2">
                        <img
                          src={imageUrl}
                          alt=""
                          className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                        />
                      </div>
                      <Delete id={id} imageUrl={imageUrl} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className={toggle === 2 ? "show-tabs" : "hide-tabs"}>
            <div className="w-full mx-auto mb-16">
              <h1 className="text-white text-xl md:text-2xl mb-4">Sprites</h1>
              <div className="flex flex-wrap justify-center item-center text-slate-100">
                {collectionSprites.map(({ imageUrl, category, id }) => {
                  return (
                    <div className="md:w-1/2 lg:w-1/4 p-2">
                      <div className="flex relative mb-2">
                        <img
                          src={imageUrl}
                          alt=""
                          className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                        />
                      </div>
                      <Delete id={id} imageUrl={imageUrl} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className={toggle === 3 ? "show-tabs" : "hide-tabs"}>
            <div className="w-full mx-auto mb-16">
              <h1 className="text-white text-xl md:text-2xl mb-4">NFT</h1>
              <div className="flex flex-wrap justify-center item-center text-slate-100">
                {collectionNft.map(({ imageUrl, category, id }) => {
                  return (
                    <div className="md:w-1/2 lg:w-1/4 p-2">
                      <div className="flex relative mb-2">
                        <img
                          src={imageUrl}
                          alt=""
                          className="inset-0 w-full h-70 object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                        />
                      </div>
                      <Delete id={id} imageUrl={imageUrl} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full px-4">
        <div className="w-full lg:w-1/2 lg:mx-auto text-center mb-16">
          <h1 className="text-white text-2xl md:text-4xl mb-4">Collection</h1>
        </div>
        <div className="w-full mx-auto mb-16">
          <h1 className="text-white text-xl md:text-2xl mb-4">Scanes</h1>
          <div className="flex flex-wrap justify-center item-center text-slate-100">
            {collectionScanes.map(({ imageUrl, category, id }) => {
              return (
                <div className="md:w-1/2 lg:w-1/3 p-2">
                  <div className="flex relative mb-2">
                    <img
                      src={imageUrl}
                      alt=""
                      className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                    />
                  </div>
                  <Delete id={id} imageUrl={imageUrl} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="w-full mx-auto mb-16">
          <h1 className="text-white text-xl md:text-2xl mb-4">Sprites</h1>
          <div className="flex flex-wrap justify-center item-center text-slate-100">
            {collectionSprites.map(({ imageUrl, category, id }) => {
              return (
                <div className="md:w-1/2 lg:w-1/3 p-2">
                  <div className="flex relative mb-2">
                    <img
                      src={imageUrl}
                      alt=""
                      className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                    />
                  </div>
                  <Delete id={id} imageUrl={imageUrl} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="w-full mx-auto">
          <h1 className="text-white text-xl md:text-2xl mb-4">Nft</h1>
          <div className="flex flex-wrap justify-center item-center text-slate-100">
            {collectionNft.map(({ imageUrl, category, id }) => {
              return (
                <div className="md:w-1/2 lg:w-1/3 p-2">
                  <div className="flex relative mb-2">
                    <img
                      src={imageUrl}
                      alt=""
                      className="inset-0 h-72 w-full object-cover object-center rounded-sm opacity-75 hover:opacity-100 cursor-pointer"
                    />
                  </div>
                  <Delete id={id} imageUrl={imageUrl} />
                </div>
              )
            })}
          </div>
        </div>
      </div> */}
    </div>
  )
}
