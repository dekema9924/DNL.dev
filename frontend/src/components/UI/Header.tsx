import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

function Header() {
    const location = useLocation()
    const path = location.pathname



    return (
        <header className="flex items-center justify-between  h-12   m-auto mt-6 ">
            {/* //nav links */}
            <ul className="md:flex items-center gap-5 hidden   text-gray-500">
                <Link to={'/'} className={` ${path === '/' ? "font-bold text-black" : ''} after:content-[''] relative after:h-full after:-right-2 after:rotate-20 after:border-r after:absolute `}>HOME</Link>
                <Link to={'/about'} className={` ${path === '/about' ? "font-bold text-black" : ''} after:content-[''] relative after:h-full after:-right-2 after:rotate-20 after:border-r after:absolute `}>ABOUT</Link>
                <Link to={'/project'} className={` ${path === '/project' ? "font-bold text-black" : ''}after:content-[''] relative after:h-full after:-right-2 after:rotate-20 after:border-r after:absolute `}>PROJECTS</Link>
                <Link to={'/contact'} className={`${path === '/contact' ? "font-bold text-black" : ''}`}>LET'S TALK</Link>
            </ul>

            {/* //hamburger menu */}
            <div className="flex flex-col md:hidden gap-2 cursor-pointer">
                <span className="border-t block w-8 "></span>
                <span className="border-t block w-8 "></span>
                <span className="border-t block w-8 "></span>
            </div>

            {/* //logo */}
            <h1 className=" font-bold text-[1.3em]">DNL.DEV</h1>
        </header>
    )
}

export default Header
