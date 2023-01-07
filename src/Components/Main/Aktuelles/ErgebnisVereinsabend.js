import React from "react";

import Image from "../../UI/Image";
import Ergebnis01 from "./Ergebnis01.jpeg";
import Ergebnis02 from "./Ergebnis02.jpeg";
import Ergebnis03 from "./Ergebnis03.jpeg";

export default function () {
  return (
    <article>
      <h3>Schießergebnisse des letzten Vereinsabends</h3>
      <Image
        image={Ergebnis01}
        description="Schießergebnisse des letzten Vereinsabends 01"
      />
      <Image
        image={Ergebnis02}
        description="Schießergebnisse des letzten Vereinsabends 02"
      />
      <Image
        image={Ergebnis03}
        description="Schießergebnisse des letzten Vereinsabends 03"
      />
    </article>
  );
}
