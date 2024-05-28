import React from 'react'
import { Theme } from '../theme/Theme'

export function Navigation(props) {


    return (
        <ul className='m-0 p-0 list-none flex'>
            <li><a className='p-5 dark:hover:bg-darkPurple hover:bg-lightGray dark:hover:text-white transition-bg duration-300 ease-in-out' href='#skills'>Skills</a></li>
            <li><a className='p-5 dark:hover:bg-darkPurple hover:bg-lightGray dark:hover:text-white transition-all duration-300 ease-in-out' href='#experiences'>Work Experiences</a></li>
            <li><a className='p-5 dark:hover:bg-darkPurple hover:bg-lightGray dark:hover:text-white transition-all duration-300 ease-in-out' href='#projects'>Projects</a></li>
            <li><a className='p-5 dark:hover:bg-darkPurple hover:bg-lightGray dark:hover:text-white transition-all duration-300 ease-in-out' href='#contact'>Contact me</a></li>
            <li><Theme /></li>
        </ul>
    )
}
