import Footer from "./components/UI/Footer"
import Header from "./components/UI/Header"
import About from "./pages/About/About"
import Hero from "./pages/Home/Hero"
import { Route, Routes } from 'react-router-dom'
import { useThemeContext } from "./context/ThemeContext"
import ToTopPage from "./util/ToTopPage"
import ProjectsPage from "./pages/projects/ProjectsPage"
import Contact from "./components/UI/Contact"
import BlogPosts from "./pages/blogs/BlogPosts"
import BlogDetails from "./pages/blogs/BlogDetails"
import { useMenuContext } from "./context/MenuContext"


function App() {
  const { isMenuOpen } = useMenuContext();
  return (
    <>
      <ToTopPage />
      <div className={`flex flex-col min-h-screen pt-10 ${useThemeContext().isDarkMode ? 'dark' : ''}`}>
        <div className="w-11/12 md:w-10/12 lg:w-9/12 m-auto flex-grow">
          <Header />


          <div className={`mt-30 ${isMenuOpen ? "opacity-20 pointer-events-none select-none blur-md" : ""}`}>

            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blogs" element={<BlogPosts />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
            </Routes>
          </div>

          <Contact />
        </div>

        <Footer />
      </div>


    </>
  )
}

export default App
