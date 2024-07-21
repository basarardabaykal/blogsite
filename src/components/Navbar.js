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
    <div className="bg-black w-full h-16 text-white lg:text-2xl text-lg flex items-center">
      <Link to="/" className="mr-16 lg:ml-16 ml-8">
        Home
      </Link>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <p>Articles</p>
        <div
          className={`absolute lg:left-40 left-28 top-16 flex flex-col text-center rounded-b-lg w-32 bg-black transition-all duration-1000 ${
            isHovering ? "h-40 py-12" : "h-0 py-0"
          }`}
        >
          <Link to="/litchi-hikari-club" className="text-lg underline">
            Litchi Hikari Club
          </Link>
        </div>
      </div>

      <Link to="/contact" className="absolute lg:right-16 right-8">
        Contact
      </Link>
    </div>
  )
}

export default Navbar
