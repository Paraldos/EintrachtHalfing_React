import { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Main/Landing/Landing";
import UeberUns from "./Components/Main/UeberUns/UeberUns";
import Aktuelles from "./Components/Main/Aktuelles/Aktuelles";
import Sportliches from "./Components/Main/Sportliches/Sportliches";
import Impressum from "./Components/Main/Impressum/Impressum";

function App() {
  const [currentPage, setCurrentPage] = useState("Landing");

  return (
    <div>
      <Navbar setPage={setCurrentPage} />
      <main>
        {currentPage == "Landing" && <Landing />}
        {currentPage == "UeberUns" && <UeberUns />}
        {currentPage == "Aktuelles" && <Aktuelles />}
        {currentPage == "Sportliches" && <Sportliches />}
        {currentPage == "Impressum" && <Impressum />}
      </main>
    </div>
  );
}

export default App;
