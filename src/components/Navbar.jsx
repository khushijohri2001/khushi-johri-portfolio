import { useEffect, useState } from "react";
import Logo from "../assets/logos/Logo1-transparent.png";
import "./css/navbar.css";
import { BrightnessHighFill, MoonStarsFill } from 'react-bootstrap-icons';



const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(true);

  const headingActiveHandler = (value) => setActive(value);

  useEffect(() => {
    const onScroll = () => {
      if( window.scrollY > 50 ){
        setScrolled(true);
      } else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  


  return (
    <nav className={ scrolled ? "scrolled flex-row flex-center flex-space-between" : "flex-row flex-center flex-space-between"}>
      <img src={Logo} alt="Logo Image" className="logo-img" />

      <div className="flex-row flex-center space-large">
        <div className="">
          <ul className="flex-row space-medium">
            <li>
              {" "}
              <h3
                className={
                  active === "home" ? "active-link nav-heading" : "nav-heading"
                }
                onClick={() => headingActiveHandler("home")}
              >
                {" "}
                Home{" "}
              </h3>{" "}
            </li>
            <li>
              {" "}
              <h3
                className={
                  active === "skill" ? "active-link nav-heading" : "nav-heading"
                }
                onClick={() => headingActiveHandler("skill")}
              >
                {" "}
                Skills{" "}
              </h3>{" "}
            </li>
            <li>
              {" "}
              <h3
                className={
                  active === "project"
                    ? "active-link nav-heading"
                    : "nav-heading"
                }
                onClick={() => headingActiveHandler("project")}
              >
                {" "}
                Projects{" "}
              </h3>{" "}
            </li>
            <li>
              {" "}
              <h3
                className={
                  active === "blog" ? "active-link nav-heading" : "nav-heading"
                }
                onClick={() => headingActiveHandler("blog")}
              >
                {" "}
                Blogs{" "}
              </h3>{" "}
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex-row space-small">
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/khushi-johri-b74970202/"
                class="social-icons fa fa-linkedin"
              ></a>
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/khushijohri2001/"
                class="social-icons fa fa-github "
              ></a>
            </li>
            <li>
              {" "}
              <a
                href="https://twitter.com/khushijohri01"
                class="social-icons fa fa-twitter "
              ></a>
            </li>
          </ul>
        </div>

        <div>
          <button className="toggle-theme-btn" onClick={() => setToggle(!toggle)}>
          { toggle ?  <BrightnessHighFill size={25}/> : <MoonStarsFill size={25}/> }
          </button>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
