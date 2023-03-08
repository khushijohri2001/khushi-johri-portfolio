import { Banner, Contact, ProjectSection, Skills } from "../components";
import colorSharpLeft from "../assets/images/color-sharp-left.png"
import colorSharpRight from "../assets/images/color-sharp-right.png"

const Home = () => {
    return(
        <>
        <Banner/>
        <img className="background-image-left" src={colorSharpLeft} alt="Image" />
        <Skills/>
        <ProjectSection/>
        <Contact/> 
        </>
    )
}

export {Home};