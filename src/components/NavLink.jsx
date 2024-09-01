import React from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../context/menu-context";
import { useMediaMatch } from "../context/media-match-context";

const NavLink = ({ active, setActive, label, path }) => {
  const { setIsMenuOpen } = useMenu();
  const { matches } = useMediaMatch();

  return (
    <li className={!matches && "py-[20px]"}>
      <Link to={path}>
        <h3
          className={`nav-heading ${active === label && "active-link"} `}
          onClick={() => {
            setActive(label);
            setIsMenuOpen(false);
          }}
        >
          {label}
        </h3>
      </Link>
    </li>
  );
};

export default NavLink;
