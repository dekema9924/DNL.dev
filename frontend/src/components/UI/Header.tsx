import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useThemeContext } from "../../context/ThemeContext"

function Header() {
    const location = useLocation()
    const path = location.pathname
    const { isDarkMode, toggleTheme } = useThemeContext()




    return (
        <header className="flex items-center justify-between  h-12 m-auto  ">
            {/* //nav links */}
            <ul className="md:flex items-center gap-5 hidden   ">
                <Link to={'/'} className={` ${path === '/' ? "font-bold " : ''} after:content-[''] relative after:h-full after:-right-2 after:rotate-20 after:border-r after:absolute `}>HOME</Link>
                <Link to={'/about'} className={` ${path === '/about' ? "font-bold " : ''} after:content-[''] relative after:h-full after:-right-2 after:rotate-20 after:border-r after:absolute `}>ABOUT</Link>
                <Link to={'/project'} className={` ${path === '/project' ? "font-bold " : ''}after:content-[''] relative after:h-full after:-right-2 after:rotate-20 after:border-r after:absolute `}>PROJECTS</Link>
                <Link to={'/contact'} className={`${path === '/contact' ? "font-bold " : ''}`}>LET'S TALK</Link>
            </ul>

            {/* //hamburger menu */}
            <div className="flex flex-col md:hidden gap-2 cursor-pointer">
                <span className="border-t block w-8 "></span>
                <span className="border-t block w-8 "></span>
                <span className="border-t block w-8 "></span>
            </div>

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
