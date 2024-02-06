import { useState } from "react"
import { Welcome, Navbar, Gallery, About, Contact } from "./components/index"

function App() {
  return (
    <div className="min-h-screen bg-main bg-fixed">
      <Navbar />
      <div className="bg-[url('./assets/img/hero.gif')] bg-center bg-no-repeat bg-cover bg-blend-multiply p-12 parallax-wrapper pb-32">
        <Welcome />
      </div>
      <div className="container mx-auto">
        <Gallery />
        <About />
        <Contact />
      </div>
    </div>
  )
}

export default App
