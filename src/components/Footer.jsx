import "./css/footer.css";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useMediaMatch } from "../context/media-match-context";

const Footer = () => {
  const {matches} = useMediaMatch();
  
  return (
    <section className="footer" id="footer">
      <div className="footer-container flex-column flex-center gap-large">
        <div className={`flex-row flex-space-between ${matches ? 'space-large' : 'space-medium'}`}>
          <Link to="/">
            {" "}
            <h3
              onClick={() => {
                scroll.scrollToTop();
              }}
            >
              Home
            </h3>
          </Link>
          <Link to="/projects">
            <h3>Projects List</h3>
          </Link>
          <Link to="/blogs">
            <h3>Blogs List</h3> 
          </Link>
        </div>

        <div>
          <p>© 2023 Khushi Johri</p>
        </div>
      </div>
    </section>
  );
};

export { Footer };
