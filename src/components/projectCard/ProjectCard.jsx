import React from "react";

export function ProjectCard({ project }) {
  const { name, url, githubUrl, description } = project;

  return (
    <div className='shadow-2xl hover:shadow-xl transition-all duration-250 ease flex flex-col dark:bg-gray-900 p-6 rounded border border-gray-400 justify-center text-center'>
      <h2 className='text-2xl font-bold py-4'>{name}</h2>
      <p className='pb-6'>{description}</p>
      <div className='flex justify-center items-center'>
        <a
          href={url}
          className='mr-8 hover:bg-white hover:text-purple-900 bg-purple-900 border border-purple-900 text-white font-semibold py-3 px-6 rounded-md uppercase text-center text-decoration-none inline-block mt-5 text-base cursor-pointer transition duration-300 ease-in-out'>
          Visit Site
        </a>
        <a
          href={githubUrl}
          className=' hover:bg-white hover:text-purple-900 bg-purple-900 border border-purple-900 text-white font-semibold py-3 px-6 rounded-md uppercase text-center text-decoration-none inline-block mt-5 text-base cursor-pointer transition duration-300 ease-in-out'>
          View Code
        </a>
      </div>
    </div>
  );
}
