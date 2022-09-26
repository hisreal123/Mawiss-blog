import React from "react";
import Banner from "../../components/Banner";
import PostCard from "../../components/PostCard";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="font-bold text-2xl md:mt-[48px]">
      <Banner />

      <div className="wrapper ">
        <div className=" wrap -translate-y-9 flex  justify-center">
          <div className=" PostCard-container grid grid-cols-1 md:grid-cols-2 gap-6 overflow-x-scroll scrollbar-hide md:cursor-pointer mx:auto max-w-[60%]  ">
            <PostCard addStyles="transition-all md:hover:shadow-lg rounded-md px-4  py-3 text-white h-[200px] " />
            <PostCard addStyles="transition-all md:hover:shadow-lg rounded-md px-4  py-3  text-white h-[200px] " />
          </div>
        </div>
      </div>
    </div>
  );
}