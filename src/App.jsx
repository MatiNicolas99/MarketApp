import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Pages } from "./Pages/Pages"
import './app.css'
import { Footer } from "./components/Footer"

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Pages />
      <Footer />
    </BrowserRouter>
  )
}

export default App
