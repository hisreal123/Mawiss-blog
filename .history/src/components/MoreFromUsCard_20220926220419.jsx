import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Profile from "./Profile";

export default function MoreFromUsCard() {
  return (
    <div className=" flex ">
      <div className="left">
        <Link to="/Blog">
          <img src="../../public/assets/bgImage.png" alt="" />
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