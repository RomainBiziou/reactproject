import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.js";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/quizz"></Link>
    </div>
  );
}

export default Navbar;
