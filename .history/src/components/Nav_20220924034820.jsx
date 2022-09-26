import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/About">Home</Link>
        </li>
        <li>
          <Link to="/blog">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
