import React from "react";
import "./style.css";
function Nav(props) {
  return (
    <nav className="navbar">
      <li>
        <a href="/">Clicky Game</a>
      </li>
      <li>{props.answer}</li>
      <li>Score: {props.score} | Top Score: {props.highscore}</li>
    </nav>
  );
}

export default Nav;
