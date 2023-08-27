import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceList from "./ExperienceList"; // Import the ExperienceList component
import colorSharp from "../assets/img/color-sharp2.png";

export const Experience = () => {
  const experiences = [
    "Front-end Web Development",
    "Machine Learning",
    "Python Programming",
    "Java Programming",
    "UI/UX",
    "Graphic Designing",
    "Illustration",
    // more experiences
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="experience-bx wow zoomIn">
              <h2>Experience</h2>
              {/* <p>While I have not had any direct experience.</p> */}
        {/* Use the ExperienceList component here */}
        <ExperienceList experiences={experiences} />
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
