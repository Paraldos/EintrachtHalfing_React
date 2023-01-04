import React from "react";
import VorstandSmall from './VorstandSmall.jpg'
import Image from "../../../UI/Image/Image";
import VorstandLi from "./VorstandLi";
import styles from "./Vorstand.module.css"

export default function() {
    const VORSTAND = [
        {position: "1. Schützenmeister", person: "Paul Anner jun."},
        {position: "2. Schützenmeister", person: "Christa Schuster", },
        {position: "1. Kassier", person: "Corinna Hillbrecht"},
        {position: "2. Kassier / Beisitzer", person: "Claus Kaulisch"},
        {position: "Schriftführer", person: "Doris Beyer"},
        {position: "Sportleiter", person: "Thomas Anner"},
        {position: "Fähnrich", person: "Benedikt Leitgeb"},
        {position: "Zeugwart", person: "Josef Lipp"},
        {position: "Jugendleiter", person: "Marc Beyer"},
        {position: "Damenleiterin", person: "Christa Schuster"},
        {position: "Ehrenschützenmeister", person: "Sepp Schuster sen."},
        {position: "Ehrenschützenmeister", person: "Hans Aicher"},
    ]

    return (
        <article className={styles.vorstand}>
            <h3>Vorstand</h3>
            <Image image={VorstandSmall} description="Foto des Vorstands von 2019" visible={true} ></Image>
            <ul>
                {VORSTAND.map(el => <VorstandLi person={el.person} position={el.position}></VorstandLi>)}
            </ul>
        </article>
    )
}