import { useState, useEffect } from "react";
import headerImg from "../assets/images/hero-img1.svg";
import { useMediaMatch } from "../context/media-match-context";

const BannerSection = () => {
  const { matches } = useMediaMatch();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Digital Artist", "Content Writer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className="my-20 px-32 flex justify-center items-center h-screen max-sm:px-8 max-sm:h-auto max-sm:my-32"
      id="Home"
    >
      <div
        className={`${
          !matches ? "flex-col" : "flex justify-between"
        }  items-center`}
      >
        <div className="w-[650px] max-sm:w-auto">
          <span className="text-xl font-bold mb-4 py-2 px-3 bg-purple-blue-gradient-dull border border-gray-400 inline-block">
            Welcome to my Portfolio
          </span>
          <h1 className="text-6xl font-extrabold mb-5 max-sm:text-3xl">
            <span className="bg-gold-gradient-text bg-clip-text text-transparent">
              {" "}
              Hi! I'm Khushi Johri{" "}
            </span>
          </h1>
          <h1 className="text-6xl font-extrabold mb-5 max-sm:text-3xl">
            <span
              className="txt-rotate"
              dataperiod="1000"
              data-rotate='[ "Web Developer", "Digital Artist", "Content Writer" ]'
            >
              <span className="border-y-0 border-l-0 border-r border-[#666]">
                {text}
              </span>
            </span>
          </h1>
          <p className="text-[#B8B8B8] text-justify text-lg leading-6 w-[96%] max-sm:w-full max-sm:text-base">
            I'm a UI Engineer by Profession and Digital Artist by Heart. I love
            to combine my creativity with my technical skills. I'm currently
            exploring NextJS and System Design with 2+ years of hands-on
            experience in VanillaJS, ReactJS, TypeScript, Redux, CSS, Tailwind
            CSS, Data Structure and Alogrithms, Testing.
            <br /> <br />
            <span className="text-white">
              To known more about me, please Scroll-up or Download my Resume
              from the top.
            </span>
          </p>
          <button className="gold-border mt-12 text-white p-4 cursor-pointer bg-transparent font-bold transition delay-150 ease-in-out hover:shadow-slide-right hover:text-black max-sm:mt-6">
            <a
              href="mailto:khushi.johri01@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Let's Connect!
            </a>
          </button>
        </div>
        <div className="max-sm: mt-10">
          <img
            src={headerImg}
            alt="Header Img"
            className="animate-updown h-[400px] max-sm:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
