import styles from "./FreundeUndBekannte.module.css";

import Logo_GauChimgau from "./Logo_GauChimgau.png";
import Logo_Halfing from "./Logo_Halfing.png";
import Logo_JungschuetzenEggstaett from "./Logo_JungschuetzenEggstaett.png";

const FreundeItem = ({ link, image, text }) => {
  return (
    <li>
      <a href={link}>
        <img src={image} alt={text} />
        <p>{text}</p>
      </a>
    </li>
  );
};

export default function () {
  return (
    <article className={styles.FreundeUndBekannte}>
      <h3>Freunde und Bekannte</h3>
      <ul>
        <FreundeItem
          link="http://www.chiemgau-prien.de/"
          image={Logo_GauChimgau}
          text="Schützengau Chiemgau Prien"
        />
        <FreundeItem
          link="https://www.halfing.de/startseite-halfing"
          image={Logo_Halfing}
          text="Gemeinde Halfing"
        />
        <FreundeItem
          link="http://www.jungschuetzen-eggstaett.de/"
          image={Logo_JungschuetzenEggstaett}
          text="Jungschützen Eggstätt"
        />
      </ul>
    </article>
  );
}
