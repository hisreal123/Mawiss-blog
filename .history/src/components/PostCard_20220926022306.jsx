import React from "react";
import Button from "./Button";
import Profile from "./Profile";
export default function PostCard() {
  return (
    <div className="bg-red-">
      <Button
        content="health"
        eventClicked=" Banner Button"
        addStyles="  px-3 py-1  mb-2 md:mb-3 "
      />

      <div className="content">
        <h3> Creative photography ideas from smart devices </h3>
        <Profile />
      </div>
    </div>
  );
}
