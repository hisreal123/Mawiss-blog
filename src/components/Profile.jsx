import React from "react";

import { CgProfile } from "react-icons/cg";
import { BiTime } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Profile({ addStyle }) {
  return (
    <div className={`${addStyle} Profile`}>
      <Link to="/Blog">
        <p className="flex mr-2 items-center hover:text-gray-200 hover:cursor-pointer  text-[.7rem] md:text-[1rem]">
          {/* <img src={CgProfile} alt="author-profile-img" /> */}
          <CgProfile className=" mr-1" />
          <span className="author-name"> Sandra</span>
        </p>
      </Link>

      <p className="dateIcon flex items-center text-[.5rem] md:text-[.7rem]">
        <BiTime className="  mr-1" />
        <span className="truncate">Apr 24, 2018</span>
      </p>
    </div>
  );
}
