import React from "react";
import Banner from "../../components/Banner";
import PostCard from "../../components/PostCard";
Home

export default function HomePage() {
  return (
    <h1 className="font-bold text-2xl md:mt-[48px]">
      <Banner />

      <div className="wrapper ">
        <div className=" wrap -translate-y-9 flex  justify-center">
          <div className="flex overflow-x-scroll container scrollbar-hide md:cursor-pointer mx:auto max-w-[60%]  ">
            <PostCard addStyles=" md:shadow-xl rounded-md px-4  py-3 text-white h-[200px] shadow-3xl" />
            <PostCard addStyles=" md:shadow-xl rounded-md px-4  py-3 ml-4 text-white h-[200px] shadow-3xl" />
          </div>
        </div>
      </div>
    </h1>
  );
}
