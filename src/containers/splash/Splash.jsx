import React from "react";
import emoji from "react-easy-emoji";
import Social from "../../components/social/Social";
import LottieImage from "../../components/lottieImage/LottieImage";
import landingPerson from "../../assets/lottie/splashAnimationGirl";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export function Splash() {
  const [targetRef, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={targetRef}
      className={(isVisible ? "fade-in " : "") + "flex pl-20 pr-20 items-center mt-10 opacity-0"}>
      <div className='flex-1'>
        <h1 className='2xl:text-6xl font-bold mb-6 md:text-5xl'>
          Hi all, I'm Teodora <span className='inline-block animate-wave'>{emoji("👋")}</span>
        </h1>
        <p className='2xl:text-2xl 2xl:leading-11 pr-5 md:text-2xl md:leading-10'>
          A passionate Frontend Software Developer 🚀 having an experience of building Web
          applications with JavaScript / Reactjs and some other cool technologies.
        </p>
        <Social />
        <a
          className='hover:bg-white hover:text-purple-900 mr-12 bg-purple-900 border border-purple-900 text-white font-semibold py-3 px-6 rounded-md uppercase text-center text-decoration-none inline-block mt-5 text-base cursor-pointer transition duration-300 ease-in-out'
          href='/'
          target='_blank'>
          Contact me
        </a>
        <a
          className='hover:bg-white hover:text-purple-900 bg-purple-900 border border-purple-900 text-white font-semibold py-3 px-6 rounded-md uppercase text-center text-decoration-none inline-block mt-5 text-base cursor-pointer transition duration-300 ease-in-out'
          href='/'
          target='_blank'>
          See my resume
        </a>
      </div>
      <div className='flex-1'>
        <LottieImage animationData={landingPerson} />
      </div>
    </div>
  );
}
