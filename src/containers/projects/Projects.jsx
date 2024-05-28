import React from "react";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export function Projects({ projects }) {
  const [targetRef, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={targetRef}
      className={(isVisible ? "fade-in " : "") + "pl-20 pr-20 mt-12 opacity-0"}
      id='projects'>
      <h2 className='text-6xl mb-10'>Projects</h2>
      <p className='uppercase mb-8 text-2xl'>Here are some of my projects.</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {projects.map((element) => (
          <ProjectCard key={element.id} project={element} />
        ))}
      </div>
    </div>
  );
}
