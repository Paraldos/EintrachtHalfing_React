import React from "react";
import Image from "../../UI/Image";
import Wanderpokal from "./wanderpokal_small.jpg";

export default function () {
  return (
    <article>
      <h3>Halfinger Dorfmeisterschaft im Schießen</h3>
      <p>
        Corona bedingt ist die Dorfmeisterschaft im Jahr 2020 und auch 2021
        leider ausgefallen. Es geht wieder aufwärts und wir hoffen auf ein
        baldiges Wiedersehen. (CK)
      </p>
      <Image image={Wanderpokal} description="Wanderpokal" />
      <p>Zur Vorfreude! Wenigstens schon mal ein Bild vom Wanderpokal.</p>
    </article>
  );
}
