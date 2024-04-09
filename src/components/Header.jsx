import { useEffect, useState } from "react";
import Logo from "../assets/logos/Logo1-transparent.png";
import { useActiveLink } from "../context/active-link-context";
import { animateScroll as scroll } from "react-scroll";
import { useMediaMatch } from "../context/media-match-context";
import { useMenu } from "../context/menu-context";
import { navItems, socialLinks } from "../data";
import NavLink from "./NavLink";
import SocialLinkIcon from "./SocialLinkIcon";

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
      className={`fixed w-full px-16 top-0 z-[9999] transition delay-0 ease-in-out max-sm:pr-8 max-sm:pl-4 ${
        scrolled && "scrolled"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <img
            src={Logo}
            alt="Logo Pic"
            className="h-36 max-sm:h-24 "
            onClick={() => {
              scroll.scrollToTop(0);
            }}
          />
     </div>

        <div className={`flex items-center ${matches ? "gap-16" : "gap-4"}`}>
          {matches && (
            <div>
              <ul className="flex gap-8">
                {navItems.map((title) => (
                  <div key={title}>
                  <NavLink
                    active={active}
                    label={title}
                    setActive={setActive}
                  />
                  </div>
                ))}
              </ul>
            </div>
          )}

          {matches && (
            <div>
              <ul className="flex gap-4  ">
                {socialLinks.filter((_, index) => index < 3).map(({ path, icon }) => (
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
            <button className="bg-white border-2 border-black p-3 rounded cursor-pointer transition delay-150 ease-in-out hover:bg-pink-400/90">
              <a
                href="Khushi-Johri-Resume.pdf"
                download="3_Khushi_Johri_Resume_BW.pdf"
                className="flex items-center justify-center gap-3 text-black font-bold "
              >
                <span className="max-sm:text-xs max-sm:font-semibold">
                  Resume
                </span>
                <i class="fa-regular fa-circle-down font-lg"></i>
              </a>
            </button>
          </div>

          {!matches && (
            <div>
              <i
                className={`bg-gold-gradient-text text-transparent bg-clip-text text-3xl fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
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
