import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharpRight from "../assets/images/color-sharp-right.png";
import "./css/skill.css";

const Skills = () => {
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
        The following is a list of some of my current technical skills I am proficient in at the moment <br></br>  , as well as what I am looking forward to learning over the next few months to become more proficient
       
        </p>
        <Carousel
          responsive={responsive}
          infinite={true}
          className="owl-carousel owl-theme skill-slider"
        >
          <div className="item">
            <img src={meter1} alt="Image" />
            <h4>ReactJS</h4>
          </div>
          <div className="item">
            <img src={meter2} alt="Image" />
            <h4>JavaScript</h4>
          </div>
          <div className="item">
            <img src={meter3} alt="Image" />
            <h4>CSS</h4>
          </div>
          <div className="item">
            <img src={meter1} alt="Image" />
            <h4>React Hooks</h4>
          </div>
          <div className="item">
            <img src={meter2} alt="Image" />
            <h4>Digital Art</h4>
          </div>
          <div className="item">
            <img src={meter3} alt="Image" />
            <h4>Content Writing</h4>
          </div>
          <div className="item">
            <img src={meter3} alt="Image" />
            <h4>Git</h4>
          </div>
        </Carousel>
        <h3 className="next-skill gold-text">
          Learning Redux, Testing, TypeScript, Webpacks, NodeJS, ExpressJS,
          MongoDB, NextJS, Three.js, Blockchain .
        </h3>
      </div>
      <img className="background-image-right" src={colorSharpRight} alt="Image" />
      </div>
    </section>
  );
};
export { Skills };
