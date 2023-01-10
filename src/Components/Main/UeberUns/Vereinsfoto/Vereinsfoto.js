import React from "react";
import Foto from "./VereinsfotoSmall.jpg";
import Image from "../../../UI/Image";

export default function () {
  return (
    <article id="vereinsfoto">
      <h3>Vereinsfoto</h3>
      <h4>Aufgenommen anlässlich der 50 jährigen Fahnenweihe im Jahr 2017</h4>
      <Image
        image={Foto}
        alt="Vereinsfoto zur 50 jährigen Fahnenweihe von 2017"
        description="Veröffentlichung mit freundlicher Genehmigung der Firma Foto Winkler"
      ></Image>
    </article>
  );
}
