import "animate.css";
import heroImg3 from "../assets/images/hero-img3.svg";
import colorSharpRight from "../assets/images/color-sharp-right.png";
import { useMediaMatch } from "../context/media-match-context";
import SocialLinkIcon from "./SocialLinkIcon";
import { socialLinks } from "../data";

const ContactSection = () => {
  const { matches } = useMediaMatch();
  return (
    <section className="relative shadow-bottom pb-24" id="Contact">
      <div className="mt-40 mx-32 gold-border max-sm:mx-8">
        <div
          className={`${
            !matches && "flex-col items-center "
          } flex py-16 px-20 bg-light-background justify-between max-sm:px-4 max-sm:py-6 max-sm:gap-16`}
        >
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold mb-8 max-sm:mb-5">Contact</h2>
            <p className="text-center">
              Get in touch with me via email or social media.
            </p>

            <div>
              <ul className="flex gap-5 flex-wrap mt-16 max-sm:mt-12 max-sm:gap-3">
                {socialLinks.map(({ path, icon }) => (
                  <div key={path}>
                    <SocialLinkIcon
                      path={path}
                      icon={icon}
                      classNames="rounded-full p-4 text-[#462523] text-xl bg-gold-gradient-text transition delay-300 ease-in-out hover:text-[#aa367c] max-sm:text-lg"
                    />
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <img
              src={heroImg3}
              alt="Hero Img 2"
              className="w-[400px] max-sm:w-[180px]"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute -z-10 right-0 top-[40%] w-[20%] max-sm:w-[80%]"
        src={colorSharpRight}
        alt="bg"
      />
    </section>
  );
};

export default ContactSection;
