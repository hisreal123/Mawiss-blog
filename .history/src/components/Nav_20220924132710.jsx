import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavItems from "./NavItems";

export default function Nav() {
  const [show, setShow] = useState(true);

  return (
    <div className="px-3 md:px-0 flex bg-transparent ">
      <div className=" font-bold  flex-1"> logo</div>

      <NavItems style={${!show ? "hidden" : " "}}/>
      <p
        className="font-bold md:hidden"
        onClick={(e) => {
          setShow(!show);
        }}
      >
        Menu{" "}
      </p>
    </div>
  );
}
