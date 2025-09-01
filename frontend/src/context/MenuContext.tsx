import { createContext, useContext, useState } from "react";


const MenuContext = createContext({
    isMenuOpen: false,
    toggleMenu: () => { }
})


const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prevMode => !prevMode);
    };

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    );
}

export const useMenuContext = () => {
    return useContext(MenuContext);
}

export default MenuContextProvider;
