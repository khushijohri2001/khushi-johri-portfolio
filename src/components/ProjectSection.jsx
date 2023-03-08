import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import colorSharpLeft from "../assets/images/color-sharp-left.png";
import "animate.css";
import { ProjectCard } from "./ProjectCard";
import "./css/project.css";
import { useState } from "react";

const ProjectSection = () => {
  const [active, setActive] = useState("first");

  const tabActiveHandler = (value) => setActive(value);
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <div>
        <h2>Projects</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div id="projects-tabs">
          <div
            className="nav-pills flex-row flex-center flex-space-between"
            id="pills-tab"
          >
            <div className="nav-item">
              <div
                className={
                  active === "first" ? "nav-link active" : "nav-link tab-first"
                }
                onClick={() => tabActiveHandler("first")}
                
              >
                Web Development
              </div>
            </div>
            <div className="nav-item">
              <div
                className={
                  active === "second"
                    ? "nav-link active"
                    : "nav-link tab-second"
                }
                onClick={() => tabActiveHandler("second")}
                
              >
                Digital Art
              </div>
            </div>
            <div className="nav-item">
              <div
                className={
                  active === "third" ? "nav-link active" : "nav-link tab-third"
                }
                onClick={() => tabActiveHandler("third")}
                
              >
                Content Writing
              </div>
            </div>
          </div>

          <div id="slideInUp">
            {active === "first" && (
              <div >
                <div className="flex-row flex-wrap space-large flex-center flex-justify-center">
                  {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </div>
              </div>
            )}

            {active === "second" && (
              <div >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quam, quod neque provident velit, rem explicabo
                  excepturi id illo molestiae blanditiis, eligendi dicta
                  officiis asperiores delectus quasi inventore debitis quo.
                </p>
              </div>
            )}
            {active === "third" && (
              <div >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quam, quod neque provident velit, rem explicabo
                  excepturi id illo molestiae blanditiis, eligendi dicta
                  officiis asperiores delectus quasi inventore debitis quo.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <img className=" onTop" src={colorSharpLeft}/>
    </section>
  );
};

export { ProjectSection };
