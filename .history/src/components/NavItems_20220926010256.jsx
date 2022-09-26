import React from "react";
import { Link } from "react-router-dom";



export default function NavItems({ fix }) {
  return (
    <nav className="">
      <ul className={` ${fix}  w-full text-white  md:flex `}>
        <li className="px-2 py-3 hover:bg-black hover:text-white ">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 py-3 hover:bg-black hover:text-white">
          <Link to="/Features">Features</Link>
        </li>
        <li className="px-2 py-3 hover:bg-black hover:text-white">
          <Link to="/Business">Business</Link>
        </li>
        <li className="px-2 py-3 hover:bg-black hover:text-white">
          <Link to="/Gaming ">Gaming</Link>
        </li>
        <li className="px-2 py-3 hover:bg-black hover:text-white">
          <Link to="/Shop ">Shop</Link>
        </li>
        <li className="px-2 py-3 hover:bg-black hover:text-white">
          <Link to="/Health ">Health</Link>
        </li>
        <li className="px-2 py-3 hover:bg-black hover:text-white">
          <Link to="/Technology ">Technology</Link>
        </li>
        <li className="px-2 py-3 hover:bg-black hover:text-white">
          <Link to="/Blog">Blog</Link>
        </li>
        <li className="px-2 py-3 hover:bg-black hover:text-white">
          <Link to="">
            <AiOutlineSearch />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
