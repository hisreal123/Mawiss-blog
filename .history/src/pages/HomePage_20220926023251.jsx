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
        <div className=" ">
          <div className="container grid grid-cols-2 md:grid-cols-3 gap-6  ">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </h1>
  );
}
