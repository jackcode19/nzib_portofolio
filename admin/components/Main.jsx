import React, { useState, useEffect } from "react"
import ListCollection from "./ListCollection"
import Upload from "./Upload"
export default function Main() {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 mt-14">
        <ListCollection />
        {/* <Upload /> */}
      </div>
    </div>
  )
}
