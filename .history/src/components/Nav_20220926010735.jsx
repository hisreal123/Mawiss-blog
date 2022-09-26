import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavItems from "./NavItems";

export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <div className=" bg-transparent absolute w-full md:px-0   bg-red-200 top-0 h-[48px] overflow-hidden z-10 md:flex md:w-[80%]  md:mx-auto  ">
      <div className="mobile flex px-3 py-2 w-full  ">
        <div className=" font-bold  flex-1">
          <Link to="/ " className="text-white ">
            logo
          </Link>
        </div>

        <p
          className="font-bold md:hidden"
          onClick={(e) => {
            setShow(!show);
          }}
        >
          Menu{" "}
        </p>
      </div>
      <NavItems fix={`${!show ? "hidden relative " : " "}`} />
    </div>
  );
}