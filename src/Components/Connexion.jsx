import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const navigate = useNavigate();

  const validerForm = (event) => {
    event.preventDefault();

    setemailError((emailError) =>
      email === "" ? "  *Veuillez saisir votre email" : ""
    );

    setpasswordError((passwordError) =>
      password === "" ? "  *Veuillez saisir votre password" : ""
    );

    if (email != "" && password != "") {
      // envoie d'une requete vers le serveur
      let user = {
        email: email,
        password: password,
      };
      axios
        .post("https://api-auth-js.herokuapp.com/user/login", user)
        .then((user) => navigate("/"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <br></br>

      <form onSubmit={validerForm}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setemail((email) => event.target.value)}
        />
        <i>{emailError}</i>
        <br /> <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setpassword((password) => event.target.value)}
        />
        <i>{passwordError}</i>
        <br></br>
        <br></br>
        <br></br>
        <button> Valider </button>
      </form>
    </div>
  );
}
