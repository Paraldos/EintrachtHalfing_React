import React from "react";

export default function ({ person, position }) {
  return (
    <li>
      <p>{person}</p>
      <p>{position}</p>
    </li>
  );
}
