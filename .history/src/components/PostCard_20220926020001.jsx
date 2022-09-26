import React from "react";
import Button from "./Button";
import { CgProfile } from "react-icons/cg";
import { BiTime } from "react-icons/bi";

export default function PostCard() {
  return (
    <div>
      <Button
        content="health"
        eventClicked=" Banner Button"
        addStyles="  px-3 py-1  mb-2 md:mb-3 "
      />

      <div className="content">
        <h3> Creative photography ideas from smart devices </h3>

          <Link to="/Blog">
            <p className="flex mr-6 items-center hover:text-gray-200 hover:cursor-pointer  text-[.7rem] md:text-[1rem]">
              {/* <img src={CgProfile} alt="author-profile-img" /> */}
              <CgProfile className=" mr-1" />
              <span className="author-name"> Sandra</span>
            </p>
          </Link>

          <p className="dateIcon flex items-center text-[.5rem] md:text-[.7rem]">
            <BiTime className="  mr-1" />
            <span>Apr 24, 2018</span>
          </p>
        </p>
      </div>
    </div>
  );
}
