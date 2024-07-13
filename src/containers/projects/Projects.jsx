import React from "react";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export function Projects({ projects }) {
  const [targetRef, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={targetRef}
      className={(isVisible ? "fade-in " : "") + "md:pl-20 md:pr-20 pl-6 pr-6 mt-12 opacity-0"}
      id='projects'>
      <h2 className='md:text-6xl text-4xl mb-10 text-center'>Projects</h2>
      <p className='uppercase mb-8 text-2xl text-center'>Here are some of my projects.</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {projects.map((element) => (
          <ProjectCard key={element.id} project={element} />
        ))}
      </div>
    </div>
  );
}
