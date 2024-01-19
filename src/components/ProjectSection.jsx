
import colorSharpLeft from "../assets/images/color-sharp-left.png";
import "animate.css";
import { ProjectCard } from "./ProjectCard";
import "./css/project-section.css";
import { useState } from "react";
import { devProjects } from "../data";
import { digitalArt } from "../data/digitalArt";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const [active, setActive] = useState("first");

  const tabActiveHandler = (value) => setActive(value);
  

  return (
    <section className="project" id="project-section">
      <div>
        <h2>Projects</h2>
        <p>
        Take a look at some of my major tech projects as well as some additional projects from my hobbies such as digital art and writing content
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
                <Link to="/projects"> <button className="view-more-btn">View More</button></Link>
                <div className="flex-row flex-wrap space-large flex-center flex-justify-center tab-content">
                  {devProjects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </div>
              </div>
            )}

            {active === "second" && (
              <div >
               <a href="https://www.instagram.com/iamdatingart/" target="_blank" rel="noreferrer"><button className="view-more-btn-2">View More</button></a> 
                <div className="flex-row flex-wrap space-large flex-center flex-justify-center tab-content">
                  {digitalArt.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </div>
              </div>
            )}
            {active === "third" && (
              <div >
               <p className="tx-big">Coming Soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <img className="onTop" src={colorSharpLeft}/>
    </section>
  );
};

export { ProjectSection };
