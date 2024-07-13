import React from "react";
import Social from "../../components/social/Social";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export function Footer() {
  const [targetRef, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={targetRef}
      className={
        (isVisible ? "fade-in " : "") +
        "pb-6 flex md:pl-20 md:pr-20 pl-6 pr-6 mt-12 opacity-0 flex-col sm:flex-row"
      }
      id='contact'>
      <div className='flex-1'>
        <h2 className='md:text-6xl text-4xl mb-10'>Reach out to me!</h2>
        <p>Open for opportunities:</p>
        <Social />
      </div>
      <div className='flex-[20% 1]'>
        <img
          className='rounded-full border-4 border-[#6c63ff] ml-auto w-full max-w-350 transition-all duration-300 ease-out'
          src='/images/profile.png'
          alt='Teodora Odanic'
        />
      </div>
    </div>
  );
}
