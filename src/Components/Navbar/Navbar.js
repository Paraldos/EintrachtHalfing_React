import React from "react";
import styles from './Navbar.module.css'

export default function Navbar() {
    return <nav>
        <div className={styles.nav__menuBtn}>
            <i class="menu_btn_symbol fa-regular fa-circle-right"></i>
        </div>
        <a href="./index.html#landing" className={styles.nav__logo}>SG Eintracht Halfing E.V.</a>
        <ul className={styles.nav__links}>
            <li><a href="./index.html#ueber_uns">Über Uns</a></li>
            <li><a href="./index.html#aktuelles">Aktuelles</a></li>
            <li><a href="./index.html#sportliches">Sportliches</a></li>
            <li><a href="./index.html#impressum">Impressum</a></li>
        </ul>
    </nav>
}
