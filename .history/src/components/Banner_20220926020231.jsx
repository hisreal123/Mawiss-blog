import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Nav from "./Nav";
import { CgProfile } from "react-icons/cg";
import { BiTime } from "react-icons/bi";
import profileDate from "./profileDate";

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
              <Link to="/Features" alt="Detail Address ">
                <h1 className="bg-white hover:bg-gray-100 border-b-[.1px]  border-b-black  px-2 py-2 ">
                  Be Inspired With Dark
                </h1>
                <h1 className="bg-white hover:bg-gray-100 border-b-[.1px]  border-b-black  px-2 py-1 w-fit ">
                  Photo And Colorful
                </h1>
                <h1 className="bg-white hover:bg-gray-100 border-b-[.1px] px-2 py-2  border-b-black  w-fit ">
                  Indoor Style
                </h1>
              </Link>
            </div>

            <profileDate />
          </div>
        </div>
      </div>
    </div>
  );
}
