import React from "react";

export default function Skill({ label, iconClass }) {
  return (
    <li className='flex flex-col items-center mr-5 text-[#868e96] hover:text-[#645beb] transition duration-300'>
      <i className={iconClass + " text-5xl mt-4"}></i>
      <p className='text-xs mt-3'>{label}</p>
    </li>
  );
}
