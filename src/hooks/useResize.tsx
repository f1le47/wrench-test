import { useEffect, useState } from "react"

function useResize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const resizeHandler = () => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }
  useEffect(() => {
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return windowWidth
}

export default useResize