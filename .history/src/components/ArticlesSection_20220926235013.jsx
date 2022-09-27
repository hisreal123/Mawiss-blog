import React from "react";
import PostCard from "./PostCard";

export default function ArticlesSection({ addStyle }) {
  return (
    <div className="grid grid-cols-4 items-center justify-center w-full relative">
      <PostCard addStyles=""} />
      <PostCard addStyles={addStyle} />
      <PostCard addStyles={addStyle} />
    </div>
  );
}
