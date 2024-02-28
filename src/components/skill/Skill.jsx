import React from "react";

export default function Skill({ label, iconClass }) {
  return (
    <li className="flex flex-col items-center mr-5 text-[#868e96] hover:text-[#645beb] transition duration-300">
      <i className={(iconClass) + " text-5xl"}></i>
      <p className="text-xs mt-4">{label}</p>
    </li>
  );
}
