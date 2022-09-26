import React from "react";
import Button from "./Button";
import Nav from "./Nav";

export default function Banner() {
  return (
    <div className="h-[400px] bg-gray-200 mt-[48px] ">
      <Button content="read more" eventClicked=" Banner Button" />
    </div>
  );
}