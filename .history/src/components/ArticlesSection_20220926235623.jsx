import React from "react";
import PostCard from "./PostCard";

export default function ArticlesSection({ addStyle }) {
  return (
    <div className="grid   grid-cols-4 gap-4 items-center justify-center w-full relative">
      <PostCard addStyles="col-span-2 h-[200px] " />
      <PostCard addStyles="col-span-1 h-[200px] " />
      <PostCard addStyles=" h-[200px] " />
    </div>
  );
}
