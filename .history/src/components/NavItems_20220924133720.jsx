import React from "react";
import { Link } from "react-router-dom";

export default function NavItems({ fix }) {
  return (
    <nav>
      <ul className={` ${fix}  md:block  w-full bg-red-200  `}>
        <li >
          <Link to="/" className=" px-2 py-3 hover:bg-black hover:text-white ">Home</Link>
        </li>
       
        <li className="px-2 py-3 hover:bg-black hover:text-white">
          <Link to="/Blog">Blog</Link>
        </li>
        <li className="px-2 py-3 hover:bg-black hover:text-white">
          <Link to="">Search</Link>
        </li>
      </ul>
    </nav>
  );
}
