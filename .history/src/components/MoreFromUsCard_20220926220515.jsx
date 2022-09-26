import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Profile from "./Profile";

export default function MoreFromUsCard() {
  return (
    <div className=" flex ">
      <div className="left">
        <Link to="/Blog" className="h-full ">
          <img
            src="../../public/assets/bgImage.png"
            alt=""
            className=" h-full obje"
          />
        </Link>
      </div>
      <div className="right">
        <Button
          content="Gaming"
          eventClicked=" Banner Button"
          //   addStyles={buttonStyle}
        />

        <h3 className="">Every Photographer Needs time to Shot his Photo </h3>

        <Profile addStyle="flex items-center" />
      </div>
    </div>
  );
}
