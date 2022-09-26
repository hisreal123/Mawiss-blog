import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavItems from "./NavItems";
import { BiMenu } from "react-icons/bi";

export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <div className=" bg-black md:bg-transparent relative md:absolute w-full   top-0 h-[48px] z-10  ">
      <div className=" relative md:flex md:justify-center  md:max-w-[80%] md:mx-auto  w-full ">
        <div className="mobile flex px-3 py-2 w-full relative ">
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
            <BiMenu color="white" fontSize="1.7rem" />
          </p>
        </div>
        <NavItems fix={`${!show ? "hidden relative " : " "}`} />
      </div>
    </div>
  );
}