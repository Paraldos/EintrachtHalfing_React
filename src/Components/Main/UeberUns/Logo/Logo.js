import React from "react";
import Logo from "./Logo.png"
import styles from "./Logo.module.css"

export default function() {
    return <img className={styles.Logo} src={Logo} alt="" />
}