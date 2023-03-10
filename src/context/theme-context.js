const { createContext, useContext, useState } = require("react");

const ThemeContext = createContext({theme: 'dark'});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
   

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext);

export { ActiveTheme, useTheme };