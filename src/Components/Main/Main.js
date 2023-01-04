import React from "react";
import Landing from "./Landing/Landing";
import UeberUns from "./UeberUns/UeberUns";
import styles from "./Main.module.css"

export default function() {
    return (
    <main className={styles.main}>
        <Landing />
        <UeberUns />
    </main>)
}