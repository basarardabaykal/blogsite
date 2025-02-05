import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { auth } from "../firebase"
import darkMode from "../assets/darkmode.png"
import { onAuthStateChanged } from "firebase/auth"

function Navbar() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true)
      }
    })

    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme)
    }

    return () => {
      unsubscribe()
    }
  }, [])

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logout = () => {
    auth.signOut()
    setIsLoggedIn(false)
  }

  const toggleTheme = () => {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    document.documentElement.classList.remove(currentTheme)
    document.documentElement.classList.add(newTheme)

    localStorage.setItem("theme", newTheme)
  }

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div className="bg-black w-full h-16 text-yellow-50 border-b-2 border-black dark:border-yellow-50 lg:text-2xl text-lg flex items-center">
      <Link to="/" className="lg:mr-16 mr-8 lg:ml-16 ml-4">
        Home
      </Link>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <p>Articles</p>
        <div
          className={`absolute lg:left-40 left-16 top-16 flex flex-col text-center border-yellow-50 border-2 border-t-0 rounded-b-lg w-32 bg-black transition-all duration-1000 ${
            isHovering ? "h-40 py-12" : "h-0 py-0 border-b-0"
          }`}
        >
          <Link to="/litchi-hikari-club" className="text-lg underline">
            <span
              className={`transition-all duration-1000 ${
                isHovering ? "visible" : "invisible"
              }`}
            >
              Litchi Hikari Club
            </span>
          </Link>
        </div>
      </div>
      <button
        className="absolute lg:right-72 right-40 w-8 bg-white rounded-full p-1"
        onClick={toggleTheme}
      >
        <img src={darkMode} alt="" />
      </button>
      <Link to="/contact" className="absolute lg:right-40 right-20">
        Contact
      </Link>
      {isLoggedIn ? (
        <Link onClick={logout} className="absolute lg:right-16 right-4">
          Logout
        </Link>
      ) : (
        <Link to="/login" className="absolute lg:right-16 right-4">
          Login
        </Link>
      )}
    </div>
  )
}

export default Navbar
