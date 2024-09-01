import {
  BannerSection,
  ContactSection,
  ProjectSection,
  SkillSection,
} from "../components";
import colorSharpLeft from "../assets/images/color-sharp-left.png";
import colorSharpRight from "../assets/images/color-sharp-right.png";
import ReactGA  from "react-ga4";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    ReactGA.initialize('G-W9JL98KJXV');
    ReactGA.send({ hitType: "pageview", page: "/", title: "Protfolio Visited" });
  }, []);


  return (
    <>
      
      <img
        className="background-image-top-right"
        src={colorSharpRight}
        alt="bg"
      />
      <BannerSection />
      <img className="background-image-left" src={colorSharpLeft} alt="bg" />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
};

export default Home;
