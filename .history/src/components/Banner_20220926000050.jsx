import React from "react";
import Button from "./Button";
import Nav from "./Nav";

export default function Banner() {
  return (
    <div className="h-[400px] bg-gray-200 mt-[48px]  ">
      <div className="container px-7 h-full md:w-[80%] md:mx-auto flex items-center ">
        <div className="wrap">
          <Button
            content="health"
            eventClicked=" Banner Button"
            addStyles="  px-3 py-1 mb-3  -translate-y-9"
          />
          <div className="content -translate-y-5 ">
            <h1 className=" font-bolder md: text-3xl lg:text-4xl ">
              <span className=" bg-white border-b-1 mb-1 border-b-black ">
                Be Inspired With Dark <br />
              </span>
              <span className="">
                Photo And Colorul <br />
              </span>
              <span className="bg-white border-b-2 border-b-black ">
                Indoor Style
              </span>
            </h1>

            <p className="profile text-[.7rem] font-normal flex items-center">
              <p className="flex mr-6 items-center">
                <img src="" alt="author-profile-img" />
                <span className="author-name"> Sendra</span>
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
