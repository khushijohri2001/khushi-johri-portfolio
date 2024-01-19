const { createContext, useContext, useState, useEffect } = require("react");

const MediaMatchContext = createContext({matches: window.matchMedia("(min-width: 400px)").matches});

const MediaMatchProvider = ({ children }) => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 400px)").matches
      )

      useEffect(() => {
        window
        .matchMedia("(min-width: 400px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

    return(
        <MediaMatchContext.Provider value={{matches}}>
            { children }
        </MediaMatchContext.Provider>
    )
}

const useMediaMatch = () => useContext(MediaMatchContext);

export { MediaMatchProvider, useMediaMatch };