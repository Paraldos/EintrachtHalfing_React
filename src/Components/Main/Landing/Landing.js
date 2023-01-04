import React from "react";
import styles from './Landing.module.css'

import PhotoHalfing_small from './PhotoHalfing_small.jpg'
import PhotoHalfing from './PhotoHalfing.jpg'

export default function () {
    return (
    <section>
      <img className="section__landingImg" src={PhotoHalfing_small} />
      <h3>Herzlich Willkommen bei der</h3>
      <h1>Schützengesellschaft Eintracht Halfing</h1>
      <h3>gegr. 1872 e.V.</h3>
    </section>)
}
