import styles from "./Vorstand.module.css";

import VorstandSmall from "./VorstandSmall.jpg";
import Image from "../../../UI/Image";

const vorstaende = [
  { position: "1. Schützenmeister", person: "Paul Anner jun." },
  { position: "2. Schützenmeister", person: "Christa Schuster" },
  { position: "1. Kassier", person: "Corinna Hillbrecht" },
  { position: "2. Kassier / Beisitzer", person: "Claus Kaulisch" },
  { position: "Schriftführer", person: "Doris Beyer" },
  { position: "Sportleiter", person: "Thomas Anner" },
  { position: "Fähnrich", person: "Benedikt Leitgeb" },
  { position: "Zeugwart", person: "Josef Lipp" },
  { position: "Jugendleiter", person: "Marc Beyer" },
  { position: "Damenleiterin", person: "Christa Schuster" },
  { position: "Ehrenschützenmeister", person: "Sepp Schuster sen." },
  { position: "Ehrenschützenmeister", person: "Hans Aicher" },
];

function Vorstand({ person, position }) {
  return (
    <li>
      <p>{person}</p>
      <p>{position}</p>
    </li>
  );
}

export default function () {
  return (
    <article className={styles.vorstand}>
      <h3>Vorstand</h3>
      <Image
        image={VorstandSmall}
        description="Foto des Vorstands von 2019"
      ></Image>
      <ul>
        {vorstaende.map((el) => (
          <Vorstand person={el.person} position={el.position}></Vorstand>
        ))}
      </ul>
    </article>
  );
}
