import { useEffect } from "react"
import { useNavigationType, useLocation } from "react-router-dom"

const ScrollRestoration = () => {
  const location = useLocation()
  const action = useNavigationType()

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0)
    }
  }, [location, action])

  return null
}

export default ScrollRestoration
