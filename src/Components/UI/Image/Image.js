import React from "react";
import styles from "./Image.module.css"

export default function({image, description, visible = false}) {
    return (
        <div className={styles.image}>
            <img src={image} alt={description}></img>
            {visible && <p className="">{description}</p>}
        </div>
    )
}