import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.js";
import Quizz from "./Quizz.js";
import background from "./images/quiz-epidemie-pneumonie-connaissez-vous-bien-ces-mots-en-rapport-avec-la-maladie-1365292.jpg";
import Home from "./Home";
import Theme from "./Theme";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quizz" component={Quizz} />
          <Route path="/theme" component={Theme} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
