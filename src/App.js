import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./Components/Accueil";
import Connexion from "./Components/Connexion";
import Inscription from "./Components/Inscription";
import NavBar from "./Components/NavBar";
import "./App.css";

export default function App() {
  return (
    <Router className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </Router>
  );
}
