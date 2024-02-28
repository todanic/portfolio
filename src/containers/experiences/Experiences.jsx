import React from 'react'
import ExperienceCard from '../../components/experienceCard/ExperienceCard'

export function Experiences({ experiences }) {


    return (
        <div className='pl-20 pr-20 mt-12'>
            <h2 className="text-6xl mb-10">Experiences</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {experiences.map((element) => (
                    <ExperienceCard key={element.id} experience={element} />
                ))}
            </div>
        </div>
    )
}
