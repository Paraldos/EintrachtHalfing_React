import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const onClickHandler = () => setIsActive(!isActive);

  return (
    <nav className={isActive ? "Nav__Open" : ""}>
      <button className="nav__menuBtn" onClick={onClickHandler}>
        <i className="fa-regular fa-circle-right"></i>
      </button>
      <a href="#" className="nav__logo">
        SG Eintracht Halfing E.V.
      </a>
      <ul className="nav__ul">
        <li>
          <button>Über Uns</button>
        </li>
        <li>
          <button>Aktuelles</button>
        </li>
        <li>
          <button>Sportliches</button>
        </li>
        <li>
          <button>Impressum</button>
        </li>
      </ul>
    </nav>
  );
}
