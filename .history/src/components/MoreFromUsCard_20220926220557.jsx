import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Profile from "./Profile";

export default function MoreFromUsCard() {
  return (
    <div className=" flex  h-">
      <div className="left">
        <Link to="/Blog" className="h-full ">
          <img
            src="../../public/assets/bgImage.png"
            alt=""
            className=" h-full object-cover"
          />
        </Link>
      </div>
      <div className="right">
        <Button
          content="Gaming"
          eventClicked=" Banner Button"
          //   addStyles={buttonStyle}
        />

        <h3 className="text-sm ">Every Photographer Needs time to Shot his Photo </h3>

        <Profile addStyle="flex items-center" />
      </div>
    </div>
  );
}
