import React from "react";
import PostCard from "./PostCard";

export default function ArticlesSection({ addStyle }) {
  return (
    <div >
      <PostCard addStyles={addStyle}/>
    </div>
  );
}
