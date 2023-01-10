import Image from "../../UI/Image";
import Ergebnis01 from "./Ergebnis01.jpeg";
import Ergebnis02 from "./Ergebnis02.jpeg";
import Ergebnis03 from "./Ergebnis03.jpeg";

export default function () {
  return (
    <section>
      <h2>Aktuelles</h2>

      {
        //======================================================================================== 66. Luftgewehr-Gauschießen
      }
      <article>
        <h3>
          66. Luftgewehr-Gauschießen des Chiemgau Prien und Paul
          Anner-Gedächtnisschießen der Schützengesellschaft "Eintracht Halfing"
          gegr. 1872 e. V.
        </h3>
        <h4>Das Gauschießen geht weiter.</h4>
        <p>
          Die Halfinger Schützen freuen sich nun endlich, nach den ganzen
          Problemen, die durch die Coronaverordnung die Weiterführung des
          Gauschießens verhindert hat, das 66. Luftgewehr-Gauschießen
        </p>
        <h4>vom 20. bis 30.Oktober</h4>
        <p>
          in unserem Schießstand durchführen zu können. Wir freuen uns auf Ihren
          Besuch und wünschen allen Teilnehmern
        </p>
        <p>"Gut Schuß"</p>
      </article>

      {
        //======================================================================================== Ergebnise Vereinsabend
      }
      <article>
        <h3>Schießergebnisse des letzten Vereinsabends</h3>
        <Image
          image={Ergebnis01}
          description="Schießergebnisse des letzten Vereinsabends Seite 1"
        />
        <Image
          image={Ergebnis02}
          description="Schießergebnisse des letzten Vereinsabends Seite 2"
        />
        <Image
          image={Ergebnis03}
          description="Schießergebnisse des letzten Vereinsabends Seite 3"
        />
      </article>
    </section>
  );
}
