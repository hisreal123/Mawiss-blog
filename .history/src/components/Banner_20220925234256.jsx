import React from "react";
import Button from "./Button";
import Nav from "./Nav";

export default function Banner() {
  return (
    <div className="h-[400px] bg-gray-200 mt-[48px] ">
      <Button content="health" eventClicked=" Banner Button" />
      <div className="content">
        <h1>
          Be Inspired With Dark <br />
          Photo And Colorul <br />
          Indoor Style
        </h1>

        <p className="profile"> 
        <img src="" alt="" srcset="" /></p>
      </div>
    </div>
  );
}
