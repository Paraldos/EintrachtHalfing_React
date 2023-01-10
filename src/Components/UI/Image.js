import React from "react";
import styles from "./Image.module.css";

export default function ({ image, description, alt = "" }) {
  return (
    <div className={styles.image}>
      <img src={image} alt={alt != "" ? alt : description} loading="lazy"></img>
      {description != "" && <p>{description}</p>}
    </div>
  );
}
