import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export function Experiences({ experiences }) {
  const [targetRef, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={targetRef}
      className={(isVisible ? "fade-in " : "") + "md:pl-20 md:pr-20 pl-6 pr-6 mt-12 opacity-0"}
      id='experiences'>
      <h2 className='md:text-6xl text-4xl mb-10 text-center'>Experiences</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {experiences.map((element) => (
          <ExperienceCard key={element.id} experience={element} />
        ))}
      </div>
    </div>
  );
}
