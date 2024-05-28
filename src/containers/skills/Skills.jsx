import React from "react";
import Skill from "../../components/skill/Skill";
import LottieImage from "../../components/lottieImage/LottieImage";
import skillsSvg from "../../assets/lottie/skillsSvg.json";
import emoji from "react-easy-emoji";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function Skills({ skills }) {
  const [targetRef, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={targetRef}
      className={
        (isVisible ? "fade-in " : "") + "flex pl-20 pr-20 mt-12 items-start pt-10 opacity-0"
      }
      id='skills'>
      <div className='flex-1'>
        <LottieImage animationData={skillsSvg} />
      </div>
      <div className='flex-1'>
        <h2 className='text-6xl mb-7'>What i do?</h2>
        <p className='uppercase leading-8 text-lg'>
          Frontend Developer with Full Stack experience in building web applications.
        </p>
        <ul className='flex mt-5'>
          {skills.map((skill) => (
            <Skill key={skill.label} label={skill.label} iconClass={skill.iconClass} />
          ))}
        </ul>
        <p className='mt-8'>
          {emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
          )}
        </p>
        <p className='mt-5'>
          {emoji(
            "⚡ Develop websites that meet industry and company standards for SEO and accessibility."
          )}
        </p>

        <p className='mt-5'>
          {emoji("⚡ Highly optimized and responsive web pages for better user experience")}
        </p>
      </div>
    </div>
  );
}
