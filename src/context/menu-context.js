import { createContext, useContext, useState } from "react";

const MenuContext = createContext({ isMenuOpen: false });

const MenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

 return(
  <MenuContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
  {children}
  </MenuContext.Provider>
 )
};

const useMenu = () => useContext(MenuContext);

export { MenuProvider, useMenu };
