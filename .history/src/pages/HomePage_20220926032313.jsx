import React from "react";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import Profile from "../components/Profile";

export default function HomePage() {
  const postCardData = [];

  return (
    <h1 className="font-bold text-2xl md:mt-[48px]">
      <Banner />

      <div className="wrapper ">
        <div className=" wrap -translate-y-9 ">
          <div className="flex overflow-x-scroll container scrollbar-hide md:cursor-pointer ">
            <PostCard addStyles=" md:shadow-xl rounded-md px-4  py-3 ml-4 " />
            <PostCard addStyles=" md:shadow-xl rounded-md px-4  py-3 ml-4 " />
            <PostCard addStyles=" md:shadow-xl rounded-md px-4  py-3 ml-4 " />
          </div>
        </div>
      </div>
    </h1>
  );
}
