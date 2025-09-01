import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useThemeContext } from "../../context/ThemeContext"
import { useEffect } from "react"
import { useMenuContext } from "../../context/MenuContext"


function Header() {
    const location = useLocation()
    const path = location.pathname
    const { isDarkMode, toggleTheme } = useThemeContext()
    const { toggleMenu, isMenuOpen } = useMenuContext()


    // Prevent background scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [isMenuOpen])

    //handle menu open
    const HandleisMenuOpen = () => {
        toggleMenu()
    }

    return (
        <header className="flex relative items-center justify-between  h-12 m-auto  ">
            {/* //nav links */}
            <ul className="md:flex items-center gap-5 hidden   ">
                <Link to={'/'} className={` ${path === '/' ? "font-bold " : ''} after:content-[''] relative after:h-full after:-right-2 after:rotate-20 after:border-r after:absolute `}>HOME</Link>
                <Link to={'/about'} className={` ${path === '/about' ? "font-bold " : ''} after:content-[''] relative after:h-full after:-right-2 after:rotate-20 after:border-r after:absolute `}>ABOUT</Link>
                <Link to={'/projects'} className={` ${path === '/project' ? "font-bold " : ''}after:content-[''] relative after:h-full after:-right-2 after:rotate-20 after:border-r after:absolute `}>PROJECTS</Link>
                <Link to={'/blogs'} className={`${path === '/contact' ? "font-bold " : ''}`}>BLOGS</Link>
            </ul>

            {/* //hamburger menu */}
            <div
                onClick={HandleisMenuOpen}
                className="flex flex-col md:hidden gap-2 cursor-pointer relative w-8 h-8 justify-center items-center"
            >
                <span
                    className={`block h-[2px] w-8 bg-white rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                        }`}
                ></span>
                <span
                    className={`block h-[2px] w-8 bg-white rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                        }`}
                ></span>
                <span
                    className={`block h-[2px] w-8 bg-white rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                        }`}
                ></span>
            </div>



            {/* //mobile nav */}

            <ul
                className={`flex flex-col absolute left-0 top-12 z-50 w-full 
    rounded-md items-center justify-center 
    overflow-hidden transition-all duration-500 
    ${isMenuOpen ? "max-h-80 py-4 gap-4 border border-gray-700" : "max-h-0 py-0 gap-0 border-0 opacity-0"}
  `}
            >
                <Link
                    onClick={HandleisMenuOpen}
                    to="/"
                    className={`block px-4 py-2 text-sm tracking-wide transition-colors 
      hover:text-indigo-400 ${path === "/" ? "font-bold text-indigo-400" : "text-white"}
    `}
                >
                    HOME
                </Link>

                <Link
                    onClick={HandleisMenuOpen}
                    to="/about"
                    className={`block px-4 py-2 text-sm tracking-wide transition-colors 
      hover:text-indigo-400 ${path === "/about" ? "font-bold text-indigo-400" : "text-white"}
    `}
                >
                    ABOUT
                </Link>

                <Link
                    onClick={HandleisMenuOpen}
                    to="/projects"
                    className={`block px-4 py-2 text-sm tracking-wide transition-colors 
      hover:text-indigo-400 ${path === "/projects" ? "font-bold text-indigo-400" : "text-white"}
    `}
                >
                    PROJECTS
                </Link>

                <Link
                    onClick={HandleisMenuOpen}
                    to="/blogs"
                    className={`block px-4 py-2 text-sm tracking-wide transition-colors 
      hover:text-indigo-400 ${path === "/blogs" ? "font-bold text-indigo-400" : "text-white"}
    `}
                >
                    BLOGS
                </Link>
            </ul>




            {/* //logo */}
            <div className="flex items-center gap-2">
                <h1 className=" font-bold text-[1.3em]">DNL.DEV</h1>
                {/* //theme mode */}
                <div onClick={toggleTheme} className='border rounded-lg p-1 cursor-pointer '>
                    {
                        isDarkMode ?
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </>
                            :
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            </>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
