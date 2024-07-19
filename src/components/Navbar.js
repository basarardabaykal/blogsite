import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div className="bg-black w-full h-16 text-white text-2xl flex items-center">
      <Link to="/" className="mr-16 ml-16">
        Home
      </Link>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <p>Articles</p>
        <div
          className={`absolute left-40 top-16 flex flex-col text-center rounded-b-lg w-40 bg-black transition-all duration-1000 ${
            isHovering ? "h-40 py-12" : "h-0 py-0"
          }`}
        >
          <Link to="/litchi-hikari-club" className="text-lg underline">
            Litchi Hikari Club
          </Link>
        </div>
      </div>

      <Link to="/contact" className="absolute right-16">
        Contact
      </Link>
    </div>
  )
}

export default Navbar
