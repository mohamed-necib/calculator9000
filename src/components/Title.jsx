import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"



const Title = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <h1 className="title">
      Calculator9000 - {darkMode ? "Dark" : "Light"} mode.
    </h1>
  )
}

export default Title