import React from "react";
import Button from "./Button";
import Profile from "./Profile";
export default function PostCard({ addStyles, buttonStyle }) {
  return (
    <div
      className={`PostCardStyle ${addStyles} bg-[url('/assets/bgImage.png')] bg-center bg-no-repeat bg-cover   `}
    >
      <div className="wrap">
        <Button
          content="health"
          eventClicked=" Banner Button"
          addStyles={buttonStyle}
        />
      </div>

      <div className="content">
        <h3 className="text-[.9rem] md:text-lg">
          Creative photography ideas from smart devices{" "}
        </h3>
        <Profile addStyle="flex items-center" />
      </div>
    </div>
  );
}
