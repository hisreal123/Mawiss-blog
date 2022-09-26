import React from "react";
import { Link } from "react-router-dom";

export default function NavItems({ fix }) {
  return (
    <nav>
      <ul className={` ${fix}  md:block  w-full bg-red-200  `}>
        <li className="px-2 py-3 hover:bg-black hover:text-white ">
          <Link to="/">Home</Link>
        </li>
        <li className="">
          <Link to="/Features">Features</Link>
        </li>
        <li className="">
          <Link to="/Business">Business</Link>
        </li>
        <li className="">
          <Link to="/Gaming">Gaming</Link>
        </li>
        <li className="">
          <Link to="/Shop">Shop</Link>
        </li>
        <li>
          <Link to="/Health">Health</Link>
        </li className="">
        <li>
          <Link to="/Technology">Technology</Link>
        </li>
        <li className="">
          <Link to="/Blog">Blog</Link>
        </li>
        <li className="">
          <Link to="">Search</Link>
        </li>
      </ul>
    </nav>
  );
}
