import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Profile from "./Profile";

export default function MoreFromUsCard() {
  return (
    <div className=" MoreFromUsCard flex  h-28 mb-2 bg-red-200 py-1 px-3">
      <div className="left">
        <Link to="/Blog" className="h-full ">
          <img
            src="../../public/assets/bgImage.png"
            alt=""
            className=" h-full object-cover"
          />
        </Link>
      </div>
      <div className="right ml-2 flex-">
        <div className="btn">
          <Button
            content="Gaming"
            eventClicked=" Banner Button"
            addStyles=" text-sm md:text-md px-4"
          />
        </div>

        <h3 className="text-sm ">
          Every Photographer Needs time to Shot his Photo{" "}
        </h3>

        <Profile addStyle="flex items-center mt-0 " />
      </div>
    </div>
  );
}
