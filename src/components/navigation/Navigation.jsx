import React from "react";
import { Theme } from "../theme/Theme";

export function Navigation() {
  return (
    <ul className='m-0 p-0 list-none flex flex-col lg:flex-row'>
      <li className='mb-8 lg:mb-0'>
        <a
          className='p-5 dark:hover:bg-darkPurple hover:bg-lightGray dark:hover:text-white transition-bg'
          href='#skills'>
          Skills
        </a>
      </li>
      <li className='mb-8 lg:mb-0'>
        <a
          className='p-5 dark:hover:bg-darkPurple hover:bg-lightGray dark:hover:text-white transition-bg'
          href='#experiences'>
          Work Experiences
        </a>
      </li>
      <li className='mb-8 lg:mb-0'>
        <a
          className='p-5 dark:hover:bg-darkPurple hover:bg-lightGray dark:hover:text-white transition-bg'
          href='#projects'>
          Projects
        </a>
      </li>
      <li className='mb-8 lg:mb-0'>
        <a
          className='p-5 dark:hover:bg-darkPurple hover:bg-lightGray dark:hover:text-white transition-bg'
          href='#contact'>
          Contact me
        </a>
      </li>
      <li className='mb-8 lg:mb-0'>
        <Theme />
      </li>
    </ul>
  );
}
