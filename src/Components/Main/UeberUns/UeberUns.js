import React from "react";
import "./UeberUns.css";

import Logo from "./Logo.png";
import Mitmachen from "./Mitmachen/Mitmachen";
import Vorstand from "./Vorstand/Vorstand";
import Vereinsfoto from "./Vereinsfoto/Vereinsfoto";
import FreundeUndBekannte from "./FreundeUndBekannte/FreundeUndBekannte";

export default function () {
  return (
    <section>
      <h2>Über Uns</h2>
      <img className="Logo" src={Logo} alt="" />
      <Mitmachen />
      <Vorstand />
      <Vereinsfoto />
      <FreundeUndBekannte />
    </section>
  );
}
