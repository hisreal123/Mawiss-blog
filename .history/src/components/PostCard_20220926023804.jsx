import React from "react";
import Button from "./Button";
import Profile from "./Profile";
export default function PostCard({ addStyles , buttonStyle}) {
  return (
    <div className={`${addStyles} bg-red-300 `}>
      <Button
        content="health"
        eventClicked=" Banner Button"
        addStyles={buttonStyle}
      />

      <div className="content">
        <h3> Creative photography ideas from smart devices </h3>
        <Profile />
      </div>
    </div>
  );
}
