import React from 'react'

export default function Social(props) {

    return (
        <div className='mt-8 mb-6'>
            <a
                href='/'
                className="icon-button github mr-5"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-github text-white rounded-full cursor-pointer inline-block text-center h-11 w-11 leading-11 text-2x1 bg-[#333] hover:bg-[#000] transition-all duration-300"></i>

            </a>
            <a
                href="/"
                className="icon-button linkedin mr-5"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-linkedin-in fab fa-github text-white rounded-full cursor-pointer inline-block text-center h-11 w-11 leading-11 text-2x1 bg-[#0e76a8] hover:bg-[#000] transition-all duration-300"></i>
                <span></span>
            </a>
            <a
                href={`mailto:teodoraodanic96@gmail.com`}
                className="mr-5 icon-button google"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fas fa-envelope text-white rounded-full cursor-pointer inline-block text-center h-11 w-11 leading-11 text-2x1 hover:bg-[#000] transition-all duration-300 bg-[#ea4335]"></i>
                <span></span>
            </a>
        </div>
    )
}


