import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import React, { useState, useEffect } from "react"
import { dataDb } from "../../src/firebase/firebase.Config"
import Delete from "../Deleted"

export default function ListCollection() {
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

  const collectionScanes = collectionImage.filter((filterImage) => {
    return filterImage.category === "scanes"
  })

  const collectionSprites = collectionImage.filter((filterImage) => {
    return filterImage.category === "sprites"
  })

  const collectionNft = collectionImage.filter((filterImage) => {
    return filterImage.category === "nft"
  })

  return (
    <div className="container">
      <div className="w-full px-4">
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
      </div>
    </div>
  )
}
