import React from "react";
import "./App.css";
import background from "./images/the_background.jpg";

function Home() {
  return (
    <body>
      <div className="App">
        <img src={background} alt="background" className="background"></img>
      </div>

      <div className="horisontal-top">
        <h1 id="nom_du_site">G_Wizz</h1>
        <h1 id="texte_centre">
          Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa
          inconsiderate et leviter proficiscere inquit ut praeceptum est, Caesar
        </h1>
      </div>
      <button
        onClick={event => (window.location.href = "/Theme")}
        type="button"
        className="bouton_commencer"
      >
        <h1 id="texte_commencer">COMMENCER !</h1>
      </button>
    </body>
  );
}

export default Home;
