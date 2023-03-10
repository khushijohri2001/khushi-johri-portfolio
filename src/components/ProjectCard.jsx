import "./css/project-section.css"

const ProjectCard = ({ title, description, imgUrl, gitSrc, liveLink }) => {
  return (
    <div>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {gitSrc && liveLink && 
          <div className="" >
          <button ><a href={gitSrc} target="_blank"> Source Code </a></button>
          <button className="left-space"><a href={liveLink} target="_blank">Live Link</a></button>
          </div>
}
        </div>
      </div>
    </div>
  )
}

export {ProjectCard};