import React from "react";
import { useLocation, Link as HeadLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useMenu } from "../context/menu-context";
import { useMediaMatch } from "../context/media-match-context";

const NavLink = ({ active, setActive, label }) => {
  const {setIsMenuOpen} = useMenu();
  const {matches} = useMediaMatch();
  const { pathname } = useLocation();

  const offset =
    (active === "Home" && -70) ||
    (active === "Skills" && -100) ||
    (active === "Projects" && -80) ||
    (active === "Blogs" && -80) ||
    (active === "Contact" && "-200");
  
  return (
    <li className={!matches && "py-6"}>
      {pathname === "/" ? (
        <Link
          activeClass="active"
          to={label}
          spy={true}
          smooth={true}
          duration={100}
          offset={offset}
          onSetActive={() => setActive(label)}
        >
          <h3
            className={`nav-heading ${active === label && "active-link"} `}
            onClick={() => {
              setActive(label);
              setIsMenuOpen(false)
            }}
          >
            {label}
          </h3>
        </Link>
      ) : (
        <HeadLink to="/">
          <h3
            className={`nav-heading ${active === label && "active-link"} `}
            onClick={() => {
              setActive(label);
              setIsMenuOpen(false)
            }}
          >
            {label}
          </h3>
        </HeadLink>
      )}
    </li>
  );
};

export default NavLink;
