import React from "react";
import Logo from "./Logo/Logo";
import Mitmachen from "./Mitmachen/Mitmachen";
import Vorstand from "./Vorstand/Vorstand";
import Vereinsfoto from "./Vereinsfoto/Vereinsfoto";

export default function() {
    return (
        <section>
          <h2>Über Uns</h2>
          <Logo />
          <Mitmachen />
          <Vorstand />
          <Vereinsfoto />
          <article id="freunde">
            <h3>Freunde und Bekannte</h3>
            <ul>
              <li>
                <a href="http://www.chiemgau-prien.de/"><img src="./img/Logo_GauChimgau.png" alt="" />
                  <p>Schützengau Chiemgau Prien</p>
                </a>
              </li>
              <li>
                <a href="https://www.halfing.de/startseite-halfing"><img src="./img/Logo_Halfing.png" alt="" />
                  <p>Gemeinde Halfing</p>
                </a>
              </li>
              <li>
                <a href="http://www.jungschuetzen-eggstaett.de/"><img src="./img/Logo_JungschuetzenEggstaett.png" alt="" />
                  <p>Jungschützen Eggstätt</p>
                </a>
              </li>
            </ul>
          </article>
        </section>
    )
}