import React from "react";
import "./css/hamburger.css";
import { useMenu } from "../context/menu-context";
import { useMediaMatch } from "../context/media-match-context";
import { Link } from "react-scroll";
import { useActiveLink } from "../context/active-link-context";
import { NavLink, useLocation } from "react-router-dom";

const HamburgerMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const { matches } = useMediaMatch();
  const { active, headingActiveHandler } = useActiveLink();
  const location = useLocation();
  const path = location?.pathname;

  const handleSetActive = (to) => {
    headingActiveHandler(to);
  };

  return (
    <>
      {!matches && isMenuOpen && (
        <div className="hamburger-container">
          <div>
            <ul className="flex-column flex-center">
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
                    onClick={() => {headingActiveHandler("home"); setIsMenuOpen(false)}}
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
                    onClick={() => {headingActiveHandler("skill"); setIsMenuOpen(false)}}
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
                    onClick={() => {headingActiveHandler("project-section"); setIsMenuOpen(false)}}
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
                    onClick={() => setIsMenuOpen(false)}
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
                    onClick={() => {headingActiveHandler("contact"); setIsMenuOpen(false)}}
                  >
                    {" "}
                    Contact{" "}
                  </h3>{" "}
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="menu-social-links">
            <ul className="flex-row flex-space-around flex-center">
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
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
