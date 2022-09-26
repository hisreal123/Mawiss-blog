import React from "react";
import Button from "./Button";

export default function MoreFromUsCard() {
  return (
    <div className=" ">
      <div className="left"></div>
      <div className="right">
        <Button
          content="health"
          eventClicked=" Banner Button"
          addStyles={buttonStyle}
        />

        <h3> </h3>
      </div>
    </div>
  );
}
