import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Nav() {
  return (
    <nav>
      <div className=" "> logo</div>

      <ul className=" hidden md:block ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Features">Features</Link>
        </li>
        <li>
          <Link to="/Business">Business</Link>
        </li>
        <li>
          <Link to="/Gaming">Gaming</Link>
        </li>
        <li>
          <Link to="/Shop">Shop</Link>
        </li>
        <li>
          <Link to="/Health">Health</Link>
        </li>
        <li>
          <Link to="/Technology">Technology</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="">Search</Link>
        </li>

      </ul>
      <p>Menu </p>
    </nav>
  );
}
