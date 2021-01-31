import React from "react";
import "./Theme.css";

function Theme() {
  return (
    <>
      <h1 id="texte_top">CHOISI UN THEME POUR POUVOIR JOUER !</h1>

      <div className="button">
        <button
          onClick={event => (window.location.href = "/Quizz")}
          type="button"
          className="cultureG"
        >
          <h1 id="culture_generale">CULTURE GENERALE</h1>
        </button>
        <button
          onClick={event => (window.location.href = "/Quizz")}
          type="button"
          className="sport"
        >
          <h1 id="sport">SPORT</h1>
        </button>
        <button
          onClick={event => (window.location.href = "/Quizz")}
          type="button"
          className="histoire"
        >
          <h1 id="histoire">HISTOIRE</h1>
        </button>
      </div>
    </>
  );
}

export default Theme;
