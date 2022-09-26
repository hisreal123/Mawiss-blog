import React from "react";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import Profile from "../components/Profile";

export default function HomePage() {
  const postCardData = [];


  for (let i = 0; i <=3 ; i++) {
    const element = array[i];
    
  }
  return (
    <h1 className="font-bold text-2xl md:mt-[48px]">
      <Banner />

      <div className="container ">
        <PostCard />
      </div>
    </h1>
  );
}
