import { useEffect, useState } from "react";
import Logo from "../assets/logos/Logo1-transparent.png";
import "./css/navbar.css";
import { BrightnessHighFill, Download, MoonStarsFill } from "react-bootstrap-icons";
import { useActiveLink } from "../context/active-link-context";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(true);
  const location = useLocation();
  const path = location?.pathname;

  const { active, headingActiveHandler } = useActiveLink();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSetActive = (to) => {
    headingActiveHandler(to);
  };

  return (
    <nav
      className={
        scrolled
          ? "scrolled flex-row flex-center flex-space-between"
          : "flex-row flex-center flex-space-between"
      }
    >
      <img
        src={Logo}
        alt="Logo Image"
        className="logo-img"
        onClick={() => {
          scroll.scrollToTop(0);
        }}
      />

      <div className="flex-row flex-center space-large">
        <div className="">
          {path === "/" && (
            <ul className="flex-row space-medium">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-70}
                  onSetActive={handleSetActive}
                >
                  <h3
                    className={
                      active === "home"
                        ? "active-link nav-heading"
                        : "nav-heading"
                    }
                    onClick={() => headingActiveHandler("home")}
                  >
                    Home
                  </h3>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="skill"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                  onSetActive={handleSetActive}
                >
                  <h3
                    className={
                      active === "skill"
                        ? "active-link nav-heading"
                        : "nav-heading"
                    }
                    onClick={() => headingActiveHandler("skill")}
                  >
                    {" "}
                    Skills{" "}
                  </h3>{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  activeClass="active"
                  to="project-section"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-80}
                  onSetActive={handleSetActive}
                >
                  <h3
                    className={
                      active === "project-section"
                        ? "active-link nav-heading"
                        : "nav-heading"
                    }
                    onClick={() => headingActiveHandler("project-section")}
                  >
                    {" "}
                    Projects{" "}
                  </h3>{" "}
                </Link>
              </li>
              <li>
                {" "}
                <NavLink
                  
                  to="/blogs"
                >
                  <h3
                    className={
                      path === "/blogs"
                        ? "active-link nav-heading"
                        : "nav-heading"
                    }
                  >
                    {" "}
                    Blogs{" "}
                  </h3>{" "}
                </NavLink>
              </li>
              <li>
                {" "}
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-200}
                  onSetActive={handleSetActive}
                >
                  <h3
                    className={
                      active === "contact"
                        ? "active-link nav-heading"
                        : "nav-heading"
                    }
                    onClick={() => headingActiveHandler("contact")}
                  >
                    {" "}
                    Contact{" "}
                  </h3>{" "}
                </Link>
              </li>
            </ul>
          )}

          {(path === "/blogs" || path === "/projects") && (
            <ul className="flex-row space-medium">
              <li>
                <NavLink to="/">
                  <h3
                    className={
                      path === "/"
                        ? "active-link nav-heading"
                        : "nav-heading"
                    }
                  >
                    Home
                  </h3>
                </NavLink>
              </li>

              <li>
                {" "}
                <NavLink to="/projects">
                  <h3
                    className={
                       path === "/projects"
                        ? "active-link nav-heading"
                        : "nav-heading"
                    }
                  >
                    {" "}
                    Projects{" "}
                  </h3>{" "}
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/blogs">
                  <h3
                    className={
                      path === "/blogs"
                        ? "active-link nav-heading"
                        : "nav-heading"

                    }
                  >
                    {" "}
                    Blogs{" "}
                  </h3>{" "}
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <div>
          <ul className="flex-row space-small">
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/khushi-johri-b74970202/"
                target="_blank"
                class="social-icons fa fa-linkedin"
              ></a>
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/khushijohri2001/"
                target="_blank"
                class="social-icons fa fa-github "
              ></a>
            </li>
            <li>
              {" "}
              <a
                href="https://twitter.com/khushijohri01"
                target="_blank"
                class="social-icons fa fa-twitter "
              ></a>
            </li>
          </ul>
        </div>

        <div>
          <button
            className="resume-download-btn"
          >
            <a href="Khushi-Johri-Resume.pdf" download="Khushi-Johri-Resume.pdf" className=" flex-row flex-center flex-justify-center text space-small"> <span>Resume</span>  <Download size={25}/> </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
