import React from "react";
import styles from './Navbar.module.css'

export default function Navbar() {
    return <nav className={styles.Nav}>
        <div className={styles.nav__menuBtn}>
            <i class="menu_btn_symbol fa-regular fa-circle-right"></i>
        </div>
        <a href="./index.html#landing" className={styles.nav__logo}>SG Eintracht Halfing E.V.</a>
        <ul className={styles.nav__links}>
            <li><button>Über Uns</button></li>
            <li><button>Aktuelles</button></li>
            <li><button>Sportliches</button></li>
            <li><button>Impressum</button></li>
        </ul>
    </nav>
}
