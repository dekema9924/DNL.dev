import { Link } from 'react-router-dom'
import { useThemeContext } from '../../context/ThemeContext'
import { MoveUpRight } from 'lucide-react';

function Button(props: { text: string; style?: string; link: string }) {
    const { isDarkMode } = useThemeContext();

    return (
        <button
            className={`group relative cursor-pointer rounded-md w-44 ${props.style} h-10 
      font-medium shadow-md overflow-hidden transition-colors duration-300
      ${isDarkMode ? "bg-gray-800 text-gray-200 border border-gray-600 hover:text-white" : "bg-gray-100 text-gray-800 border border-gray-300 hover:text-black"}`}
        >
            <Link
                to={`${props.link}`}
                className="relative z-10 px-4 py-2 flex items-center justify-center gap-2"
            >
                {props.text} <MoveUpRight />
            </Link>

            {/* Animated background */}
            <span
                className={`absolute inset-0 ${isDarkMode ? "bg-indigo-500" : "bg-indigo-400"
                    } 
        origin-left scale-x-0 transition-transform duration-300 ease-in-out
        group-hover:scale-x-100 z-0`}
                aria-hidden="true"
            />
        </button>
    );
}

export default Button;
