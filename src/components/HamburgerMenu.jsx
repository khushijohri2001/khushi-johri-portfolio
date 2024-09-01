import React from "react";
import { useMenu } from "../context/menu-context";
import { useMediaMatch } from "../context/media-match-context";
import { useActiveLink } from "../context/active-link-context";
import SocialLinkIcon from "./SocialLinkIcon";
import NavLink from "./NavLink";
import { navItems, socialLinks } from "../data/data";

const HamburgerMenu = () => {
  const { isMenuOpen } = useMenu();
  const { matches } = useMediaMatch();
  const { active, setActive } = useActiveLink();

  return (
    <>
      {!matches && isMenuOpen && (
        <div className="fixed w-screen h-screen bg-black z-[999] top-[94px]">
          <div>
            <ul className="flex flex-col items-center mt-4">
              {navItems.map(({ path, title }) => (
                <div key={title}>
                  <NavLink
                    active={active}
                    setActive={setActive}
                    label={title}
                    path={path}
                  />
                </div>
              ))}
            </ul>
          </div>

          <div className=" border-t border-[rgba(176, 176, 176, 0.611)]">
            <ul className="flex justify-around items-center w-full mt-12">
              {socialLinks
                .filter((_, index) => index < 3)
                .map(({ path, icon }) => (
                  <div key={path}>
                    <SocialLinkIcon
                      path={path}
                      icon={icon}
                      iconCount="3"
                      classNames="rounded-full p-4 text-white bg-purple-blue-gradient-dull hover:bg-gold-gradient-text hover:text-transparent hover:bg-clip-text"
                    />
                  </div>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
