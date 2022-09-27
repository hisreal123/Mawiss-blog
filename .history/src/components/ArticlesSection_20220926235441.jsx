import React from "react";
import PostCard from "./PostCard";

export default function ArticlesSection({ addStyle }) {
  return (
    <div className="grid   grid-cols-4 items-center justify-center w-full relative">
      <PostCard addStyles="col-span-2 height" />
      <PostCard addStyles="col-span-1 height" />
      <PostCard addStyles=" height" />
    </div>
  );
}
