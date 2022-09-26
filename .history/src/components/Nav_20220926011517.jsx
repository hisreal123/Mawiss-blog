import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavItems from "./NavItems";
import { BiMenu } from "react-icons/bi";

export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <div className=" bg-transparent absolute w-full   top-0 h-[48px] overflow-hidden z-10  ">
      <div className="wrappe  relative md:flex md:justify-center md:max-w-[80%] md:mx-auto  w-full ">
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
            <BiMenu color="white" fontSize="1.5rem" className='hover' />
          </p>
        </div>
        <NavItems fix={`${!show ? "hidden relative " : " "}`} />
      </div>
    </div>
  );
}
