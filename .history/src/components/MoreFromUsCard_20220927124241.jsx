import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Profile from "./Profile";

export default function MoreFromUsCard({addStyle}) {
  return (
    <div className={` $ MoreFromUsCard flex h-28 mb-2  py-1 px-3`}>
      <div className="left">
        <Link to="/Blog" className="h-full ">
          <img
            src="/assets/bgImage.png"
            alt=""
            className=" h-full object-cover"
          />
        </Link>
      </div>
      <div className="right ml-2 flex flex-col justify-center ">
        <div className="btn mb-1">
          <Button
            content="Gaming"
            eventClicked=" Banner Button"
            addStyles=" text-[.6rem] px-2 tracking-widest "
          />
        </div>

        <div className="wrap ">
          <Link to="/Blog">
            <h3 className="text-sm ">
              Every Photographer Needs time to Shot his Photo{" "}
            </h3>
          </Link>

          <Profile addStyle="flex items-center -mt-2 " />
        </div>
      </div>
    </div>
  );
}
