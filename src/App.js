import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Main/Landing/Landing";
import UeberUns from "./Components/Main/UeberUns/UeberUns";
import Aktuelles from "./Components/Main/Aktuelles/Aktuelles";
import Sportliches from "./Components/Main/Sportliches/Sportliches";
import Impressum from "./Components/Main/Impressum/Impressum";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Landing />
        <UeberUns />
        <Aktuelles />
        <Sportliches />
        <Impressum />
      </main>
    </div>
  );
}

export default App;
