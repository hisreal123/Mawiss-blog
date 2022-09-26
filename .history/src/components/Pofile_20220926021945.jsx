import React from "react";

export default function Pofile() {
  return (
    <div className="profile text-[.7rem] flex items-center text-white font-bold relative ">
    <Link to="/Blog">
      <p className="flex mr-6 items-center hover:text-gray-200 hover:cursor-pointer  text-[.7rem] md:text-[1rem]">
        {/* <img src={CgProfile} alt="author-profile-img" /> */}
        <CgProfile className=" mr-1" />
        <span className="author-name"> Sandra</span>
      </p>
    </Link>

    <p className="dateIcon flex items-center text-[.5rem] md:text-[.7rem]">
      <BiTime className="  mr-1" />
      <span>Apr 24, 2018</span>
    </p>
  </div>
  <ProfileDate />
</div>
  );
}
