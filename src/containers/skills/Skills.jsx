import React from "react";
import Skill from "../../components/skill/Skill";
import LottieImage from "../../components/lottieImage/LottieImage";
import skillsSvg from "../../assets/lottie/skillsSvg.json";

const skills = [
  {
    label: "html",
    iconClass: "fab fa-html5",
  },
  {
    label: "css",
    iconClass: "fab fa-css3-alt",
  },
  {
    label: "sass",
    iconClass: "fab fa-sass",
  },
  {
    label: "JavaScript",
    iconClass: "fab fa-js",
  },
  {
    label: "React",
    iconClass: "fab fa-react",
  },
];
export default function Skills() {
  return (
    <div className="flex pl-20 pr-20 items-center mt-10">
      <div className="flex-1">
        <LottieImage animationData={skillsSvg} />
      </div>
      <div className="flex-1">
        <h2 className="text-5xl mb-7">What i do?</h2>
        <p>
          Frontend Developer with Full Stack experience in building web
          applications.
        </p>
        <ul className="flex">
          {skills.map((skill) => (
            <Skill
              key={skill.label}
              label={skill.label}
              iconClass={skill.iconClass}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
