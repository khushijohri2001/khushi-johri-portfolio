import { Link } from "react-router-dom"
import "../components/css/blog.css"

const Blogs = () => {
    return(
        <div className="blog" id="blog">
          <div className="flex-column flex-justify-center flex-center space-large">

            <h1 className="">Coming Soon...</h1>
            <Link to="/"><button className="resume-download-btn">Back to Home</button></Link>
          </div>
        </div>
    )
}

export {Blogs}