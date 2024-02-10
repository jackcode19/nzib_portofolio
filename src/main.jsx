import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom"
import CollectionPage from "./manage/CollectionPage.jsx"
import Admin from "../admin/Home.jsx"
// import Upload from "../admin/components/Upload.jsx"

const router = createBrowserRouter([
  {
    path: "/nzib_portofolio",
    element: <App />,
  },
  {
    path: "/nzib_portofolio/collection",
    element: <CollectionPage />,
  },
  {
    path: "/nzib_portofolio/admin",
    element: <Admin />,
  },
  // {
  //   path: "/nzib_portofolio/admin/upload",
  //   element: <Upload />,
  // },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)
