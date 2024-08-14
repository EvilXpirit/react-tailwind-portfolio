// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import reactLogo from "../assets/skills logos/react-logo.webp";
import nodejsLogo from "../assets/skills logos/nodejs-logo.png";
import expressjsLogo from "../assets/skills logos/expressjs-logo.png";
import mongodbLogo from "../assets/skills logos/mongodb-logo.png";
import JavaLogo from "../assets/skills logos/java-logo.png";
import HtmlLogo from "../assets/skills logos/html-logo.png";
import CssLogo from "../assets/skills logos/css-logo.png";
import TailwindLogo from "../assets/skills logos/tailwind-logo.png";
import jsLogo from "../assets/skills logos/javascript-logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    {
      logo: reactLogo,
      name: "React.Js",
    },
    {
      logo: nodejsLogo,
      name: "Node.js",
    },
    {
      logo: expressjsLogo,
      name: "Express.js",
    },
    {
      logo: mongodbLogo,
      name: "MongoDB",
    },
    {
      logo: JavaLogo,
      name: "Java Programming",
    },
    {
      logo: HtmlLogo,
      name: "HTML5",
    },
    {
      logo: CssLogo,
      name: "CSS6",
    },
    {
      logo: TailwindLogo,
      name: "Tailwind CSS",
    },
    {
      logo: jsLogo,
      name: "JavaScript",
    },
  ];

  return (
    <section className="skill mb-5" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                These are the skills that i currently posess and actively
                pursuing proficiency in these.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item">
                    <div className="logos place-content-center">
                    <img src={skill.logo} className="rounded-full hover:bg-white duration-200 ease-in-out object-cover object-center" alt="Image" />
                    </div>
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
