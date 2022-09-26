import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function NavItems({ fix, change }) {
  return (
    <nav
      className=" bg-black transition-all duration-150 "
      onClick={(e) => {
        console.log(" nav clicked ");
      }}
    >
      <ul className={` ${fix}   w-full text-white  md:flex items-center z-40 `}>
        <li className="px-2 py-3 hover:bg-black hover:text-white ">
          <Link to="">Home</Link>
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
