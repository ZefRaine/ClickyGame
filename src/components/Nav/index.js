import React from "react";
import "./style.css";
function Nav() {
  return (
    <nav className="navbar">
      <li>
        <a href="/">Clicky Game</a>
      </li>
      <li>Click images to play!</li>
      <li>Score: 0 | Top Score: 0</li>
    </nav>
  );
}

export default Nav;
