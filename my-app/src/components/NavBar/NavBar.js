import React from "react";
import Scores from "../Scores";
import "./NavBar.css";

const NavBar = (props) => {
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">gametime</a>
      </li>
      <Scores score={props.score} topScore={props.topScore} />
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

 module export.NavBar
