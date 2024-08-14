import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceList from "./ExperienceList"; // Import the ExperienceList component
import colorSharp from "../assets/img/color-sharp2.png";

export const Experience = () => {
  const experiences = [
    {
      position: "Software Developer Intern",
      company: "Numetry Technologies",
      duration: "6 Months",
      from: "Jan 2024 - July 2024",
      description: [
        " Gained hands-on experience with the MERN stack (MongoDB, ExpressJS, ReactJS, Node.js). ",
        "Developed and maintained responsive web applications",
        " Worked on multiple frontend-based mini projects as the part of training. Collaborated with the software development team on various projects, including live projects, enhancing both frontend and backend functionalities.",
        " Handled different RESTful APIs. ",
        "Demonstrated strong problem-solving skills and the ability to adapt to new technologies quickly.",
        " Received positive feedback for a high level of comprehension, efficient task management, and professional demeanor."
      ],
    },
    {
      position: " Machine Learning Intern",
      company: "Bharat Intern",
      duration: "1 Month",
      from: "Aug 2023 - Sep 2023",
      description: [
        " Built a machine learning model to predict house prices using linear regression.",
        "Developed a machine learning model to predict the quality of wine using linear regression.",
        "Created a model to predict different species of flowers based on the length of their petals and sepals using logistic regression."
      ],
    },
    {
      position: "Web Developer Intern",
      company: "TechnoHacks EduTech",
      duration: "1 Month",
      from: "July 2023 - Aug 2023",
      description: [
        " Built a Responsive Portfolio website using React.js",
        "Created a web application that allows users to convert currency amounts between different currencies using real-time exchange rates using HTML, CSS & JavaScript.",
        "Built A Calculator web application using Html, CSS and JavaScript that performs basic arithmetic operations."
      ],
    },
  ];

  return (
    <section className="experience position-relative pb-5" id="experience">
      <div className="container mx-auto">
          <div className="col-12">
            <div className="experience-bx wow zoomIn text-center -mt-14 px-12 py-14">
              <h2 className="pb-10">Experience</h2>
              <ExperienceList experiences={experiences} />
            </div>
          </div>
      </div>
      <img className="background-image-left hidden md:flex" src={colorSharp} alt="Image" />
    </section>
  );
};
