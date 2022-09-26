import React from "react";
import Banner from "../../components/Banner";
import MoreFromUs from "../../components/MoreFromUs";
import MoreFromUsCard from "../../components/MoreFromUsCard";
import PostCard from "../../components/PostCard";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="font-bold text-2xl md:mt-[48px]">
      <Banner />

      <div className="Blog- flex flex-col ">
        <div className=" Overlapper -translate-y-20 flex  justify-center">
          <div className=" PostCard-container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6  md:cursor-pointer mx:auto max-w-[78%] md:max-w-[80%] z-50 ">
            <PostCard addStyles="transition-all duration-150 md:hover:shadow-xl px-5 py-2 text-white h-[200px] flex justify-between flex-col  hover:scale-105 " />
            <PostCard addStyles="transition-all duration-150 md:hover:shadow-xl px-5 py-2  text-white h-[200px] md:flex justify-between flex-col  hidden hover:scale-105 " />
            <PostCard addStyles="transition-all duration-150 md:hover:shadow-xl px-5 py-2  text-white h-[200px] lg:flex justify-between flex-col  hidden hover:scale-105 " />
          </div>
        </div>

        <div className="MoreFromUs  container px-7 h-full md:w-[80%] md:mx-auto  relative ">
          <h2 className="text-md font-bold mb-3 mt-8 "> More From Us</h2>
          <div className="grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-4 ">
            <MoreFromUsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
