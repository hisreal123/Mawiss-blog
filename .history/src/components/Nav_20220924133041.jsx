import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavItems from "./NavItems";

export default function Nav() {
  const [show, setShow] = useState(true);

  return (
    <div className="md:px-0 bg-transparent ">
      <div className="mobile flex px-3 w-full ">
        <div className=" font-bold  flex-1"> logo</div>

        <p
          className="font-bold md:hidden"
          onClick={(e) => {
            setShow(!show);
          }}
        >
          Menu{" "}
        </p>
      </div>
      <NavItems fix={`${!show ? "hidden" : " "}`} />
    </div>
  );
}
