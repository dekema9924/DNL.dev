import Footer from "./components/UI/Footer"
import Header from "./components/UI/Header"
import About from "./pages/Home/About"
import Hero from "./pages/Home/Hero"
import { Route, Routes } from 'react-router-dom'
import { useThemeContext } from "./context/ThemeContext"

function App() {
  return (
    <>
      <div className={`pt-10 ${useThemeContext().isDarkMode ? 'dark' : ''}`}>
        <div className="w-11/12 md:w-10/12 lg:w-9/12  m-auto ">
          <Header />

          <div className="mt-30">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
