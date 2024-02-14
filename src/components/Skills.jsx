import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharpRight from "../assets/images/color-sharp-right.png";
import "./css/skill.css";
import SkillCard from "./SkillCard";
import { skillList } from "../data/skillList";
import { useMediaMatch } from "../context/media-match-context";

const Skills = () => {
  const {matches} =  useMediaMatch()
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section  id="skill">
      <div className="skill">
      <div className="skill-bx ">
        <h2>Skills</h2>
        <p>
        The following is a list of some of my current technical skills I am proficient in, {matches && <br></br>} as well as what I am looking forward to learning over the next few months to enhance my skills
       
        </p>
        <Carousel
          responsive={responsive}
          infinite={true}
          className="owl-carousel owl-theme skill-slider"
        >
         {skillList.map(({id, label}) => <SkillCard key={id} label={label} />)}
        </Carousel>
        <h3 className="next-skill gold-text">
          Learning TypeScript,  NodeJS, ExpressJS, MongoDB, NextJS, React Native, Three.js.
        </h3>
      </div>
      <img className="background-image-right" src={colorSharpRight} alt="img" />
      </div>
    </section>
  );
};
export { Skills };
