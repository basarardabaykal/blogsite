import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import ScrollRestoration from "./components/ScrollRestoration"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Litchi from "./pages/Litchi"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <ScrollRestoration></ScrollRestoration>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/litchi-hikari-club" element={<Litchi />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
