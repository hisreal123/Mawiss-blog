import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Features">Features</Link>
        </li>
        <li>
          <Link to="/Bussiness">Business</Link>
        </li>
      </ul>

      
    </nav>
  );
}
