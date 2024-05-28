import React from "react";
import { Navigation } from "../../components/navigation/Navigation";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export function Header() {
  const [targetRef, isVisible] = useIntersectionObserver();

  return (
    <header
      ref={targetRef}
      className={
        (isVisible ? "fade-in " : "") + "flex items-center justify-between p-5 header opacity-0"
      }>
      <a href='/' className='block text-3xl no-underline mt-3 leading-normal'>
        <span className='text-customGray'>&lt;</span>
        <span className='font-agustina font-bold font-feature-normal font-common-ligatures px-3'>
          Teodora Odanic
        </span>
        <span className='text-customGray'>/&gt;</span>
      </a>
      <Navigation />
    </header>
  );
}
