import React from "react";
import styles from "./Main.module.css";

import Landing from "./Landing/Landing";
import UeberUns from "./UeberUns/UeberUns";
import Aktuelles from "./Aktuelles/Aktuelles";
import Sportliches from "./Sportliches/Sportliches";
import Impressum from "./Impressum/Impressum";

export default function () {
  return (
    <main className={styles.Main}>
      <Landing />
      <UeberUns />
      <Aktuelles />
      <Sportliches />
      <Impressum />
    </main>
  );
}
