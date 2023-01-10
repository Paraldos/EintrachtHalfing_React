import React, { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ setPage }) {
  const [isActive, setIsActive] = useState(false);

  const onClick_MenuBtn_Handler = () => setIsActive(!isActive);
  const onClick_link_Handler = (event) => {
    setPage(event.target.attributes.targetpage.value);
    setIsActive(false);
    window.scrollTo(0, 0);
  };

  const NavItem = ({ txt, targetpage }) => {
    return (
      <li>
        <button onClick={onClick_link_Handler} targetpage={targetpage}>
          {txt}
        </button>
      </li>
    );
  };

  return (
    <nav className={`${styles.nav} ${isActive ? styles.nav__open : ""}`}>
      <button className={styles.nav__menuBtn} onClick={onClick_MenuBtn_Handler}>
        <i className="fa-regular fa-circle-right"></i>
      </button>
      <button
        className={styles.nav__logo}
        onClick={onClick_link_Handler}
        targetpage="Landing"
      >
        SG Eintracht Halfing E.V.
      </button>
      <ul className={styles.nav__ul}>
        <NavItem targetpage="UeberUns" txt="Über Uns" />
        <NavItem targetpage="Aktuelles" txt="Aktuelles" />
        <NavItem targetpage="Sportliches" txt="Sportliches" />
        <NavItem targetpage="Impressum" txt="Impressum" />
      </ul>
    </nav>
  );
}
