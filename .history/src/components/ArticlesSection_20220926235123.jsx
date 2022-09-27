import React from "react";
import PostCard from "./PostCard";

export default function ArticlesSection({ addStyle }) {
  return (
    <div className="grid col-span  grid-cols-4 items-center justify-center w-full relative">
      <PostCard addStyles="]cols-span-2" />
      <PostCard addStyles={addStyle} />
      <PostCard addStyles={addStyle} />
    </div>
  );
}
