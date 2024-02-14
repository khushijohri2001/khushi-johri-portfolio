import { useEffect, useState } from "react";
import Logo from "../assets/logos/Logo1-transparent.png";
import "./css/navbar.css";
import { Download } from "react-bootstrap-icons";
import { useActiveLink } from "../context/active-link-context";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaMatch } from "../context/media-match-context";
import { useMenu } from "../context/menu-context";

const Navbar = () => {
  const { matches } = useMediaMatch();
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const path = location?.pathname;
  const { active, headingActiveHandler } = useActiveLink();

  useEffect(() => {
    const onScroll = () => {
      matches
        ? window.scrollY > 50
          ? setScrolled(true)
          : setScrolled(false)
        : window.scrollY > 0
        ? setScrolled(true)
        : setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [matches]);

  const handleSetActive = (to) => {
    headingActiveHandler(to);
  };

  return (
    <nav className={`nav-padding ${scrolled ? "scrolled" : "undefined"}`}>
      <div className="flex-row flex-center flex-space-between">
        <div>
          <img
            src={Logo}
            alt="Logo Pic"
            className="logo-img"
            onClick={() => {
              scroll.scrollToTop(0);
            }}
          />
        </div>

        <div
          className={`flex-row flex-center ${
            matches ? "space-large" : "space-small"
          }`}
        >
          {matches && (
            <div>
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
          )}

          {matches && (
            <div>
              <ul className="flex-row space-small gap">
                <li>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/khushi-johri-b74970202/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icons fa fa-linkedin"
                  >
                    {" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://github.com/khushijohri2001/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icons fa fa-github "
                  >
                    {" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://twitter.com/khushijohri01"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icons fa fa-twitter"
                  >
                    {" "}
                  </a>
                </li>
              </ul>
            </div>
          )}

          <div>
            <button className="resume-download-btn">
              <a
                href="Khushi-Johri-Resume.pdf"
                download="3_Khushi_Johri_Resume_BW.pdf"
                className="flex-row flex-center flex-justify-center text space-small "
              >
                {" "}
                <span className={!matches && "small-font"}>Resume</span>{" "}
                <Download size={matches ? 25 : 16} />{" "}
              </a>
            </button>
          </div>

          {!matches && (
            <div>
              {isMenuOpen ? (
                <i
                  className="menu-icons fas fa-xmark"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                ></i>
              ) : (
                <i
                  className="menu-icons fas fa-bars"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                ></i>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
