import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Nav from "./Nav";
import { CgProfile } from "react-icons/cg";
import { BiTime } from "react-icons/bi";

export default function Banner() {
  return (
    <div className="h-[500px] w-full  bg-[url('/assets/bgImage.png')] -z-10 ">
      <div className="container px-7 h-full md:w-[80%] md:mx-auto flex items-center ">
        <div className="wrap">
          <Button
            content="health"
            eventClicked=" Banner Button"
            addStyles="  px-3 py-1  mb-2 md:mb-3 "
          />
          <div className="content  ">
            <div className="relative  font-bolder text-[1.3rem] md:text-3xl lg:text-4xl mb-1 md:mb-3">
              <Link
                to="/Features"
                alt="Detail Address "
              >
                <h1 className="border-b-[.1px]  border-b-black  px-2 py-2 ">
                  Be Inspired With Dark
                </h1>
                <h1 className="border-b-[.1px]  border-b-black  px-2 py-1 w-fit ">
                  Photo And Colorful
                </h1>
                <h1 className="border-b-[.1px] px-2 py-2  border-b-black  w-fit ">
                  Indoor Style
                </h1>
              </Link>
            </div>

            <p className="profile text-[.7rem] flex items-center text-white font-bold">
              <p className="flex mr-6 items-center hover:text-gray-200 hover:cursor-pointer  text-[.7rem] md:text-[1rem]">
                {/* <img src={CgProfile} alt="author-profile-img" /> */}
                <CgProfile className=" mr-1" />
                <span className="author-name"> Sandra</span>
              </p>

              <p className="dateIcon flex items-center text-[.5rem] md:text-[.7rem]">
                <BiTime className="  mr-1" />
                <span>Apr 24, 2018</span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
