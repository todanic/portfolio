import React from 'react'
import { ProjectCard } from '../../components/projectCard/ProjectCard'

export function Projects({ projects }) {


    return (
        <div className='pl-20 pr-20 mt-12'>
            <h2 className="text-6xl mb-10">Projects</h2>
            <p className='uppercase mb-8 text-2xl'>Here are some of my projects.</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {projects.map(element => (
                    <ProjectCard key={element.id} project={element} />
                ))}
            </div>
        </div>
    )
}
