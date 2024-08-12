import React, { useState, useEffect } from "react";
import headerImg from "../assets/img/my_banner2.svg";
import { ArrowRightCircle, ArrowDownCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Programmer", "UI/UX Designer"];
  const period = 1000;

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

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <section className="banner pt-32 pb-20" id="home">
      <div className="container mx-auto">
        <div className="md:flex items-center">
          <div className="md:w-1/2">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    Hi There! <br /> I'm Aditya Sharma
                    <br />{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Programmer", "UI/UX Designer" ]'
                    >
                      <span
                        className="wrap"
                        style={{ color: getRandomColor() }}
                      >
                        {text}
                      </span>
                    </span>
                  </h1>
                  <p className="text-gray-700">
                    Enthusiastic and passionate B.Tech graduate with a solid
                    foundation in web development and the MERN stack. Proficient
                    in programming languages and eager to apply my skills in
                    creating high-performance applications and solving complex
                    problems. Actively seeking an opportunity to join a dynamic
                    team where I can contribute my expertise and further develop
                    my skills
                  </p>
                  <div className="buttons flex lg:flex-row flex-col gap-x-24 mb-5">
                    <button
                      onClick={() => console.log("connect")}
                      className="text-white font-bold inline-flex items-center"
                    >
                      Let’s Connect{" "}
                      <ArrowRightCircle size={25} className="ml-2" />
                    </button>
                    <a
                      href="https://drive.google.com/file/d/1-O3QxaFCNVLjhXlxK8ja_GfBA3QqyaG5/view?usp=sharing"
                      className="text-white font-bold inline-flex items-center no-underline"
                      target="_blank" 
                      rel="noopener noreferrer" 
                    >
                      Resume <ArrowDownCircle size={25} className="ml-2" />
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div className="md:w-1/2">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" className="mx-auto lg:w-11/12" />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};
