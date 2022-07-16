import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <Link className="Navlink" to="/">
        Accueil
      </Link>
      <Link className="Navlink" to="/connexion">
        Connexion
      </Link>
      <Link className="Navlink" to="/inscription">
        Inscription
      </Link>
    </nav>
  );
}
