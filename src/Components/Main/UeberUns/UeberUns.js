import Logo from "./Logo/Logo";
import Mitmachen from "./Mitmachen/Mitmachen";
import Vorstand from "./Vorstand/Vorstand";
import Vereinsfoto from "./Vereinsfoto/Vereinsfoto";
import FreundeUndBekannte from "./FreundeUndBekannte/FreundeUndBekannte";

export default function () {
  return (
    <section>
      <h2>Über Uns</h2>
      <Logo />
      <Mitmachen />
      <Vorstand />
      <Vereinsfoto />
      <FreundeUndBekannte />
    </section>
  );
}
