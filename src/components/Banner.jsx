import { useState, useEffect } from "react";
import headerImg from "../assets/images/hero-img1.svg";
import "./css/banner.css";


const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Digital Artist", "Content Writer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

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
    <section className="banner" id="home">
        <div className="flex-row flex-center flex-space-between">
          <div className="banner-content">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
             <span className="gold-text"> {`Hi! I'm Khushi Johri `}{" "}</span>
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='[ "Web Developer", "Digital Artist", "Content Writer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p className="banner-description">
            I'm are a creative frontend web developer based in Jaipur, India. My expertise in progressive enhancement, and design systems make you a valuable asset in the industry. I'm a 4th-year computer science student at Poornima Group of Institutions, who's always looking for opportunities to improve my skills and take on new challenges. 

            </p>
          <button className="gold-border connect-btn slide_right">
          <a href="mailto:khushi.johri01@gmail.com" target="_blank" > <p>Let's Connect!</p></a>
          </button>
          </div>
          <div >
            <img src={headerImg} alt="Header Img" />
          </div>
        </div>
       
    </section>
  );
};

export { Banner };
