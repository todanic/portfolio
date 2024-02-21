import React from "react";

export default function Skill({ label, iconClass }) {
  return (
    <li>
      <i className={iconClass}></i>
      <p>{label}</p>
    </li>
  );
}
