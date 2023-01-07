import React from "react";
import "./FreundeUndBekannte.css";

import FreundeUndBekannteLi from "./FreundeUndBekannteLi";
import Logo_GauChimgau from "./Logo_GauChimgau.png";
import Logo_Halfing from "./Logo_Halfing.png";
import Logo_JungschuetzenEggstaett from "./Logo_JungschuetzenEggstaett.png";

export default function () {
  return (
    <article className="FreundeUndBekannte">
      <h3>Freunde und Bekannte</h3>
      <ul>
        <FreundeUndBekannteLi
          link="http://www.chiemgau-prien.de/"
          image={Logo_GauChimgau}
          text="Schützengau Chiemgau Prien"
        />
        <FreundeUndBekannteLi
          link="https://www.halfing.de/startseite-halfing"
          image={Logo_Halfing}
          text="Gemeinde Halfing"
        />
        <FreundeUndBekannteLi
          link="http://www.jungschuetzen-eggstaett.de/"
          image={Logo_JungschuetzenEggstaett}
          text="Jungschützen Eggstätt"
        />
      </ul>
    </article>
  );
}
