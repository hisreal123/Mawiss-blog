import React from "react";
import Button from "./Button";

export default function MoreFromUsCard() {
  return (
    <div className=" ">
      <div className="left"></div>
      <div className="right">
        <Button
          content="Gaming"
          eventClicked=" Banner Button"
          addStyles={buttonStyle}
        />

        <h3>Every Photographer needs time to Shot his Photo </h3>
      </div>
    </div>
  );
}