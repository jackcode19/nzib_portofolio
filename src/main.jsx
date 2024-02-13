import React from "react"
import "./index.css"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Admin from "./admin/Admin.jsx"
import AllCollection from "./admin/components/AllCollection.jsx"

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom"
import Upload from "./admin/components/Upload.jsx"

const router = createBrowserRouter([
  {
    path: "/nzib_portofolio/",
    element: <App />,
  },
  {
    // path: "/nzib_portofolio/admin",
    element: <Admin />,
    children: [
      {
        path: "/nzib_portofolio/admin",
        element: <AllCollection />,
      },
      {
        path: "/nzib_portofolio/admin/upload",
        element: <Upload />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
