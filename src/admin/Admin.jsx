import Aside from "./components/Aside"
import AllCollection from "./components/AllCollection"
import Upload from "./components/Upload"
import { Routes, Route, Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

const Admin = () => {
  return (
    <div className="bg-main min-h-screen">
      <Aside />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin
