import React from "react";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import Profile from "../components/Profile";

export default function HomePage() {
  const postCardData = [];

  

  return (
    <h1 className="font-bold text-2xl md:mt-[48px]">
      <Banner />

      <div className="container  ">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </h1>
  );
}
