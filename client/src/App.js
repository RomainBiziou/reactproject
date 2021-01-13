import React from "react";
import "./App.css";
import background from "./images/quiz-epidemie-pneumonie-connaissez-vous-bien-ces-mots-en-rapport-avec-la-maladie-1365292.jpg";

function App() {
  return (
    <body>
      <div className="App">
        <img src={background} alt="background" className="background"></img>
      </div>

      <div className="horisontal-top">
        <h1 id="nom_du_site">quizz website</h1>
        <h1 id="texte_centre">
          Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa
          inconsiderate et leviter proficiscere inquit ut praeceptum est, Caesar
        </h1>
      </div>
      <div className="bouton_commencer">
        <h1 id="texte_commencer">COMMENCER !</h1>
      </div>
    </body>
  );
}

export default App;
