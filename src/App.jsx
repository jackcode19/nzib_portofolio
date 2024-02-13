import "./index.css"
import {
  Welcome,
  Navbar,
  Gallery,
  About,
  Contact,
  Footer,
  GalleryImage,
} from "./components/index"

function App() {
  return (
    <div className="min-h-screen bg-main bg-fixed">
      <Navbar />
      <div className="bg-[url('./assets/img/hero.gif')] bg-center bg-no-repeat bg-cover bg-blend-multiply pt-12 pb-32">
        <Welcome />
      </div>
      <div className="container mx-auto">
        <Gallery />
        <About />
        <Contact />
        {/* <GalleryImage /> */}
      </div>
      <Footer />
    </div>
  )
}

export default App
