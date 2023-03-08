import "animate.css";
import "./css/contact.css";
import { EnvelopeFill } from "react-bootstrap-icons";
import heroImg3 from "../assets/images/hero-img3.svg";
import colorSharpRight from "../assets/images/color-sharp-right.png";

const Contact = () => {
  return (
    <section  id="connect">
      <div className="contact gold-border ">
      <div className="contact-container flex-row flex-space-between">
      <div className=" flex-column flex-center flex-justify-center">
        <h2>Contact</h2>
        <p>Get in touch with me via email or social media.</p>

        <div className="">
          <ul className="flex-row space-small flex-wrap contact-links-container">
            <li>
              <a href="mailto:khushi.johri01@gmail.com">
                <EnvelopeFill className="contact-social-icons" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/khushi-johri-b74970202/"
                className="contact-social-icons fa fa-linkedin"
              />
            </li>
            <li>
              <a
                href="https://github.com/khushijohri2001/"
                className="contact-social-icons fa fa-github "
              />
            </li>
            <li>
              <a
                href="https://twitter.com/khushijohri01"
                className="contact-social-icons fa fa-twitter "
              />
            </li>
          </ul>
        </div>
      </div>

      <div>
        <img src={heroImg3} alt="Hero Img 2" className="contact-img" />
      </div>
      </div>
      </div>
      <img className="on-top2" src={colorSharpRight} alt="Image" />
    </section>
  );
};

export { Contact };
