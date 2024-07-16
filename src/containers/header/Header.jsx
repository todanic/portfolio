import React, { useState } from "react";
import { Navigation } from "../../components/navigation/Navigation";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export function Header() {
  const [targetRef, isVisible] = useIntersectionObserver();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={targetRef}
      className={
        (isVisible ? "fade-in " : "") +
        "flex items-center justify-between p-5 header opacity-0 relative"
      }>
      <a href='/' className='block lg:text-3xl text-nowrap no-underline mt-3 leading-normal'>
        <span className='text-customGray'>&lt;</span>
        <span className='font-agustina font-bold font-feature-normal font-common-ligatures px-3'>
          Teodora Odanic
        </span>
        <span className='text-customGray'>/&gt;</span>
      </a>
      <div className='lg:hidden absolute right-5 top-5'>
        <button onClick={toggleMenu} className='text-customGray focus:outline-none'>
          <svg className='w-10 h-10' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#menuClip)'>
              <rect width='20' y='6' height='2' fill='currentColor' />
              <rect width='20' y='12' height='2' fill='currentColor' />
              <rect width='20' y='18' height='2' fill='currentColor' />
            </g>
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isMenuOpen ? "visible opacity-100 z-10 max-h-[600px]" : "invisible opacity-0"
        } lg:visible lg:opacity-100 lg:max-h-full lg:flex lg:relative lg:top-0 absolute top-[110px] left-0 w-full lg:w-auto dark:bg-darkBgColor bg-white pl-10 max-h-0 transition-all duration-300`}>
        <Navigation />
      </nav>
    </header>
  );
}
