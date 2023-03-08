import { Col } from "react-bootstrap";
import "./css/project.css"

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}

export {ProjectCard};