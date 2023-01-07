import React from "react";
import "./Landing.css";

import PhotoHalfingSmall from "./PhotoHalfingSmall.jpg";
import PhotoHalfing from "./PhotoHalfing.jpg";

export default function () {
  return (
    <section className="landing">
      <img className="landing__img" src={PhotoHalfingSmall} />
      <h3>Herzlich Willkommen bei der</h3>
      <h1>Schützengesellschaft Eintracht Halfing</h1>
      <h3>gegr. 1872 e.V.</h3>
    </section>
  );
}
