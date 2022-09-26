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

        <p className="profile text-[.7rem] font-normal flex ">
          <p className="flex mr-6">
            <img src="" alt="author-profile-img" />
            <span className="author-name"> Sendra</span>
          </p>

          <p className="dateIcon flex ">
            <span className="mr-1 ">icon</span>
            <span>Apr 24, 2018</span>
          </p>
        </p>
      </div>
    </div>
  );
}
