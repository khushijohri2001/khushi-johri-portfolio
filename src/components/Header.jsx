import { useEffect, useState } from "react";
import Logo from "../assets/logos/Logo1-transparent.png";
import { useActiveLink } from "../context/active-link-context";
import { animateScroll as scroll } from "react-scroll";
import { useMediaMatch } from "../context/media-match-context";
import { useMenu } from "../context/menu-context";
import NavLink from "./NavLink";
import SocialLinkIcon from "./SocialLinkIcon";
import { navItems, socialLinks } from "../data/data";
import { Link } from "react-router-dom";
import KhushiJohriResume from "../assets/documents/7_Khushi_Johri_Resume_BW.pdf";

const Header = () => {
  const { matches } = useMediaMatch();
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const [scrolled, setScrolled] = useState(false);
  const { active, setActive } = useActiveLink();

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

  return (
    <header
      className={`fixed w-full px-16 top-0 z-[9999] transition delay-0 ease-in-out max-sm:pr-8 max-sm:pl-4 max-sm:bg-black ${
        scrolled && "scrolled"
      }`}
    >
      <div className="flex items-center justify-between h-full">
        <div>
          <Link to="/">
          <img
            src={Logo}
            alt="Logo Pic"
            className="h-36 max-sm:h-24 z-50"
            onClick={() => {
              scroll.scrollToTop(0);
              setActive("Home");
              setIsMenuOpen(false)
            }}
          />
          </Link>
        </div>

        <div className={`flex items-center ${matches ? "gap-16" : "gap-4"}`}>
          {/* Large screen */}
          {matches && (
            <div>
              <ul className="flex gap-8">
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
          )}

          {/* Large screen */}
          {matches && (
            <div>
              <ul className="flex gap-4  ">
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
          )}

          <div>
            <button className="bg-white border-2 border-black p-3 rounded cursor-pointer transition delay-150 ease-in-out hover:bg-purple-blue-gradient-dull">
              <a
                href={KhushiJohriResume}
                download="Khushi-Johri-Resume.pdf"
                className="flex items-center justify-center gap-3 text-black font-bold "
              >
                <span className="max-sm:text-xs max-sm:font-semibold">
                  Resume
                </span>
                <i class="fa-regular fa-circle-down font-lg"></i>
              </a>
            </button>
          </div>

          {/* Small screen */}
          {!matches && (
            <div>
              <i
                className={`bg-gold-gradient-text text-transparent bg-clip-text text-3xl fa-solid ${
                  isMenuOpen ? "fa-xmark" : "fa-bars"
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              ></i>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
