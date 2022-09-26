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
        <div className=" wrap -translate-y-9">
          <div className="container grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6  w-[80%] mx-auto">
            <PostCard addStyles=" md:shadow-xl rounded-md px-4  py-3 " />
            <PostCard addStyles=" md:shadow-xl rounded-md px-4  py-3 " />
            <PostCard addStyles=" md:shadow-xl rounded-md px-4  py-3 " />
          </div>
        </div>
      </div>
    </h1>
  );
}