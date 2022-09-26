import React from "react";
import Button from "./Button";
import Nav from "./Nav";

export default function Banner() {
  return (
    <div className="h-[auto] bg-gray-200 mt-[48px]  ">
      <Nav />
      <Button content="read more" eventClicked=" Banner Button" />
    </div>
  );
}
