import React from 'react'

export default function ExperienceCard({ experience }) {

    const { name, position, date, image, description, whiteBackground } = experience;

    return (
        <div className='relative bg-gray-900 shadow-lg rounded-lg border border-gray-400'>
            <div className='bg-purple-900 flex flex-col relative h-[150px] items-center rounded-l-[10px] rounded-r-[10px]'>
                <h3 className='text-2xl font-bold mt-6'>{name}</h3>
                <img className={(whiteBackground ? ' bg-white' : '') + ' w-[200px] absolute bottom-[-20px] left-[50%] translate-x-[-50%]'} src={image} alt={name} />
            </div>
            <div className='py-12 flex flex-col items-center px-6 text-center'>
                <p className='font-bold text-xl mb-2'>{position}</p>
                <p className='mb-6'>{date}</p>
                <p className='leading-8'>{description}</p>
            </div>
        </div>
    )
}
