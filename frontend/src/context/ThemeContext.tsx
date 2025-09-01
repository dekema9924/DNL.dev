
import { useContext, createContext, useState } from "react";


const ThemeContext = createContext({
    isDarkMode: false,
    toggleTheme: () => { }
})

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isDarkMode, setIsDarkMode] = useState(true)
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export default ThemeContextProvider;
