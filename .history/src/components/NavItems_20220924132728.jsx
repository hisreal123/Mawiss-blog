import React from "react";

export default function NavItems({ style }) {
  return (
    <nav>
      <ul className={` ${style}   md:block  w-full `}>
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
    </nav>
  );
}
