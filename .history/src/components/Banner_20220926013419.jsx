import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Nav from "./Nav";
import { CgProfile } from "react-icons/cg";

export default function Banner() {
  return (
    <div className="h-[470px] w-full  bg-[url('/assets/bgImage.png')] -z-10 ">
      <div className="container px-7 h-full md:w-[80%] md:mx-auto flex items-center ">
        <div className="wrap">
          <Button
            content="health"
            eventClicked=" Banner Button"
            addStyles="  px-3 py-1 mb-3 "
          />
          <div className="content  ">
            <div className="relative  font-bolder  md:text-3xl lg:text-4xl  mb-3">
              <Link to="/Features" alt="Detail Address ">
                <h1 className="bg-white border-b-[.1px]  border-b-black  px-2 py-2 ">
                  Be Inspired With Dark
                </h1>
                <h1 className="bg-white border-b-[.1px]  border-b-black  px-2 py-1 ">
                  Photo And Colorful
                </h1>
                <h1 className="bg-white border-b-[.1px] px-2 py-2  border-b-black  ">
                  Indoor Style
                </h1>
              </Link>
            </div>

            <p className="profile text-[.7rem] flex items-center text-white font-bold">
              <p className="flex mr-6 items-center">
                {/* <img src={CgProfile} alt="author-profile-img" /> */}
                <CgProfile
                  className="hover:cursor-pointer hover:bg-gray-200 "
                  fontSize="1.1rem "
                  mr= ' 2px'
                />
                <span className="author-name"> Sandra</span>
              </p>

              <p className="dateIcon flex ">
                <span className="mr-1 ">icon</span>
                <span>Apr 24, 2018</span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}