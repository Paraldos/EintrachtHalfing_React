import React from "react";
import styles from "./Impressum.module.css";

export default function () {
  return (
    <section className={styles.Impressum}>
      <h2>Impressum</h2>

      <article>
        <h4>Schützengesellschaft Eintracht Halfing gegr. 1872 e.V.</h4>
        <p>Holzhamer Str. 28</p>
        <p>83128 Halfing</p>
      </article>

      <article>
        <h4>Gemeinschaftlich vertretungsberechtigt:</h4>
        <h4>1. Vorstand:</h4>
        <p>Paul Anner</p>
        <p>Holzhamer Str. 28</p>
        <p>83128 Halfing</p>
        <p>
          <b>Tel:</b> +49 8055 904657
        </p>
        <p>
          <b>E-Mail: </b>
          <a href="mailto:schuetzenmeister@eintracht-halfing.de">
            schuetzenmeister@eintracht-halfing.de
          </a>
        </p>
        <br />
        <h4>2. Vorstand:</h4>
        <p>Christa Schuster</p>
        <p>Gunzenham 10</p>
        <p>83128 Halfing</p>
        <p>
          <b>Tel:</b> +49 8055 646
        </p>
      </article>

      <article>
        <p>
          <b>Registergericht: </b> Amtsgericht Traunstein
        </p>
        <p>
          <b>Registernummer:</b> VR 40640
        </p>
        <p>
          <b>Umsatzsteuer-Identifikationsnummer:</b>
        </p>
      </article>

      <article>
        <h4>V.i.S.d § 18 Abs. 2 MStV</h4>
        <p>Paul Anner</p>
        <p>Holzhamer Str. 28</p>
        <p>83128 Halfing</p>
      </article>

      <article>
        <h4>Webdesign</h4>
        <p>Sieghard Hillbrecht</p>
        <p>Blumenweg 1</p>
        <p>83093 Bad Endorf</p>
        <p>
          <b>E-Mail:</b>{" "}
          <a href="mailto:hillbrecht.s@gmail.com">hillbrecht.s@gmail.com</a>
        </p>
      </article>
    </section>
  );
}
