import React from "react";
import Button from "./Button";
import Profile from "./Profile";

export default function MoreFromUsCard() {
  return (
    <div className=" ">
      <div className="left">
        <img src="" alt=""  />
      </div>
      <div className="right">
        <Button
          content="Gaming"
          eventClicked=" Banner Button"
        //   addStyles={buttonStyle}
        />

        <h3>Every Photographer Needs time to Shot his Photo </h3>

        <Profile addStyle=''/>
      </div>
    </div>
  );
}
