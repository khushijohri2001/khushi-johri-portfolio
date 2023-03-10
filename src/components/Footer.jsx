import "./css/footer.css";
import { EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="footer-container flex-row flex-space-between">
        <div>
          <Link to="/">
            {" "}
            <p
              onClick={() => {
                scroll.scrollToTop();
              }}
            >
              {" "}
              © 2023 Khushi Johri
            </p>
          </Link>
        </div>
        <div className="flex-row flex-space-between space-large">
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
            <h3>Projects</h3>
          </Link>
          <Link to="/blogs">
            <h3>Blogs</h3>
          </Link>
        </div>
        <div className="flex-row space-medium">
          <a href="tel:+91 7597390197" target="_blank" >
            <TelephoneFill size={25} />{" "}
          </a>
          <a href="mailto:khushi.johri01@gmail.com" target="_blank">
            <EnvelopeFill size={25} />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export { Footer };
