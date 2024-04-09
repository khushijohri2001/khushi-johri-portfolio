const { createContext, useContext, useState } = require("react");

const ActiveLinkContext = createContext({active: 'Home'});

const ActiveLinkProvider = ({ children }) => {
    const [active, setActive] = useState("Home");

    return(
        <ActiveLinkContext.Provider value={{active, setActive}}>
            { children }
        </ActiveLinkContext.Provider>
    ) 
}

const useActiveLink = () => useContext(ActiveLinkContext);

export { ActiveLinkProvider, useActiveLink };