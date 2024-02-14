import { Banner, Contact, ProjectSection, Skills } from "../components";
import colorSharpLeft from "../assets/images/color-sharp-left.png"
import colorSharpRight from "../assets/images/color-sharp-right.png"
import HamburgerMenu from "../components/HamburgerMenu";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebaseConfig";

const Home = () => {
    useEffect(() => {
        logEvent(analytics, {eventName: "Portfolio visited"})
    })
    return(
        <>
        <HamburgerMenu/>
        <img className="background-image-top-right" src={colorSharpRight} alt="bg" />
        <Banner/>
        <img className="background-image-left" src={colorSharpLeft} alt="bg" />
        <Skills/>
        <ProjectSection/>
        <Contact/> 
        </>
    )
}

export {Home};