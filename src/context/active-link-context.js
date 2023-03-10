const { createContext, useContext, useState } = require("react");

const ActiveLinkContext = createContext({active: 'home'});

const ActiveLinkProvider = ({ children }) => {
    const [active, setActive] = useState("home");
    const headingActiveHandler = (value) => setActive(value);

    return(
        <ActiveLinkContext.Provider value={{active, headingActiveHandler}}>
            { children }
        </ActiveLinkContext.Provider>
    )
}

const useActiveLink = () => useContext(ActiveLinkContext);

export { ActiveLinkProvider, useActiveLink };