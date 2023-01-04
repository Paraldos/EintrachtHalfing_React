import React from "react";
import styles from './Landing.module.css'

import PhotoHalfingSmall from './PhotoHalfingSmall.jpg'
import PhotoHalfing from './PhotoHalfing.jpg'

export default function () {
    return (
    <section className={styles.landing}>
      <img className={styles.landing__img} src={PhotoHalfingSmall} />
      <h3>Herzlich Willkommen bei der</h3>
      <h1>Schützengesellschaft Eintracht Halfing</h1>
      <h3>gegr. 1872 e.V.</h3>
    </section>)
}
