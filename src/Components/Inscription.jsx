import React, { useState } from "react";
import axios from "axios";

export default function Inscription() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [nationality, setnationality] = useState("");
  const [genre, setgenre] = useState("");

  const [firstnameError, setfirstnameError] = useState("");
  const [lastnameError, setlastnameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [nationalityError, setnationalityError] = useState("");
  const [genreError, setgenreError] = useState("");

  const validerForm = (event) => {
    event.preventDefault();

    setfirstnameError((firstnameError) =>
      firstname === "" ? "  *Veuillez saisir votre nom" : ""
    );

    setlastnameError((lastnameError) =>
      firstname === "" ? "  *Veuillez saisir votre prénom" : ""
    );

    setemailError((emailError) =>
      email === "" ? "  *Veuillez saisir votre email" : ""
    );

    setpasswordError((passwordError) =>
      password === "" ? "  *Veuillez saisir votre password" : ""
    );

    setnationalityError((nationalityError) =>
      nationality === "" ? "  *Veuillez saisir votre nationalité" : ""
    );

    if (
      firstname != "" &&
      email != "" &&
      password != "" &&
      nationality &&
      genre != ""
    ) {
      console.log("envoie d'une requete vers le serveur");
      let user = {
        prenom: firstname,
        nom: lastname,
        email: email,
        password: password,
        nationality: nationality,
        genre: genre,
      };
      axios
        .post("https://api-auth-js.herokuapp.com/user/signup", user)
        .then((user) => console.log(user.data))
        .catch((err) => console.log(err));
    } else {
      console.log(firstname, lastname, email, password, nationality, genre);
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <br></br>

      <form onSubmit={validerForm}>
        <input
          type="text"
          placeholder="nom"
          value={firstname}
          onChange={(event) => setfirstname((firstname) => event.target.value)}
        />
        <i>{firstnameError}</i>
        <br /> <br />
        <input
          type="text"
          placeholder="prénom"
          value={lastname}
          onChange={(event) => setlastname((lastname) => event.target.value)}
        />
        <i>{lastnameError}</i>
        <br /> <br />
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
        <br /> <br />
        <select
          value={nationality}
          onChange={(event) =>
            setnationality((nationality) => event.target.value)
          }
        >
          <option value=""></option>
          <option value="Fr">France</option>
          <option value="Esp">Espagne</option>
          <option value="It">Italie</option>
        </select>
        <i>{nationalityError}</i>
        <br></br>
        <select
          value={genre}
          onChange={(event) => setgenre((genre) => event.target.value)}
        >
          <option value=""></option>
          <option value="h">Homme</option>
          <option value="f">Femme</option>
        </select>
        <br></br>
        <br></br>
        <br></br>
        <button> Valider </button>
      </form>
    </div>
  );
}
