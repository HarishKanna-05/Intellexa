import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Tail from "./components/Tail"
import Landing from "./pages/Landing"
import Gallery from "./pages/Gallery"
import Certificate from "./pages/Certificate"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"


function App() {

  return (
    <div className="font-afacad">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Tail />
    </div>
  )
}

export default App
