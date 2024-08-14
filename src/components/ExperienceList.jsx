import React from "react";

const ExperienceList = ({ experiences }) => {
  return (
    <div className="experience-list">
      <ul className="space-y-8">
        {experiences.map((experience, index) => (
          <li key={index} className="flex flex-col-reverse md:flex-row items-start md:items-center">
            <div className="md:w-1/4 text-left lg:text-center flex md:flex-col flex-col-reverse">
              <p className="text-lg font-medium text-gray-600">{experience.duration}</p>
              <p className="text-sm text-gray-400 mt-3 md:mt-4">{experience.from}</p>
            </div>
            <div className="md:w-1/12 flex justify-center items-center">
              <div className="h-20 md:h-[250px] w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-50 hidden md:flex"></div>
            </div>
            <div className="md:w-2/3 text-start">
              <h4 className="text-xl font-semibold">{experience.position}</h4>
              <h5 className="text-lg text-gray-500">{experience.company}</h5>
              <ul className="list-disc pl-5 text-gray-500">
                {experience.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceList;
