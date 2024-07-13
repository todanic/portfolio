import React, { useState, useRef, useEffect } from "react";
import { Navigation } from "../../components/navigation/Navigation";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export function Header() {
  const [targetRef, isVisible] = useIntersectionObserver();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuMaxHeight, setMenuMaxHeight] = useState("0px");
  const navRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      setMenuMaxHeight(`${navRef.current.scrollHeight}px`);
    } else {
      setMenuMaxHeight("0px");
    }
  }, [isMenuOpen]);

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
      <a href='/' className='block text-3xl no-underline mt-3 leading-normal'>
        <span className='text-customGray'>&lt;</span>
        <span className='font-agustina font-bold font-feature-normal font-common-ligatures px-3'>
          Teodora Odanic
        </span>
        <span className='text-customGray'>/&gt;</span>
      </a>
      <div className='lg:hidden absolute right-5 top-5'>
        <button onClick={toggleMenu} className='text-customGray focus:outline-none'>
          <svg
            className={`w-10 h-10 transition-transform duration-500 animate-scale`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
      </div>
      <nav
        ref={navRef}
        style={{ maxHeight: menuMaxHeight }}
        className={`${
          isMenuOpen ? "visible opacity-100 z-10" : "invisible opacity-0"
        } lg:flex absolute top-[110px] left-0 w-full dark:bg-darkBgColor pl-10 max-h-0 transition-all duration-300`}>
        <Navigation />
      </nav>
    </header>
  );
}
