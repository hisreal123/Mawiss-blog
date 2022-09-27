import React from "react";
import PostCard from "./PostCard";

export default function ArticlesSection({ addStyle }) {
  return (
    <div className="grid   grid-cols-5 items-center justify-center w-full relative">
      <PostCard addStyles="col-span-2" />
      <PostCard addStyles="col-span-1" />
      <PostCard addStyles="col-span-2" />
    </div>
  );
}
