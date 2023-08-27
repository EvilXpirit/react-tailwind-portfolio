import React from "react";

const ExperienceList = ({ experiences }) => {
  return (
    <div className="experience-list">
      {/* <h3>Work Experience</h3> */}
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <p>{experience}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceList;
