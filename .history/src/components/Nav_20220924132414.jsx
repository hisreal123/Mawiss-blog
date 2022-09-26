import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Nav() {
  const [show, setShow] = useState(ture);

  return (
    <nav className="px-3 md:px-0 flex bg-transparent ">
      <div className=" font-bold  flex-1"> logo</div>

      <ul className={` ${!show ? "hidden" : " "}   md:block  w-100`}>
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
      <p
        className="font-bold md:hidden"
        onClick={(e) => {
          setShow(!show);
        }}
      >
        Menu{" "}
      </p>
    </nav>
  );
}
