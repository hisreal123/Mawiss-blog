import React from "react";
import PostCard from "./PostCard";

export default function ArticlesSection({ addStyle }) {
  return (
    <div className={addStyle}>
      <PostCard />
    </div>
  );
}
