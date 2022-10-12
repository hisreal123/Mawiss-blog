import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Profile from "./Profile";

export default function Banner() {
 

  return (
    <section className="h-[500px]  w-full-z-10">

        <div className="h-full relative bg-[url('/assets/bgImage.png')]  ">
          <div className="container px-7 h-full md:w-[80%] md:mx-auto flex items-center ">
            <div className="wrap">
              <Button
                content="health"
                eventClicked=" Banner Button"
                addStyles="  px-3 py-1  mb-2 md:mb-3 "
              />
              <div className="content">
                <div className="relative  font-bolder text-[1.3rem] md:text-3xl lg:text-4xl mb-1 md:mb-3">
                  <Link to='/blog' alt="Detail Address ">
                    <h1 className="bg-white hover:bg-gray-100 border-b-[.1px]  border-b-black  px-2 py-2 ">
                      Banner Display
                    </h1>
                  </Link>
                </div>
              </div>

              <Profile addStyle="profile text-[.7rem] flex items-center text-white font-bold relative" />
            </div>
          </div>
        </div>
    </section>
  );
}
