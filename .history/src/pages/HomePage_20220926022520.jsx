import React from "react";
import Banner from "../components/Banner";
import Profile from "../components/Profile";

export default function HomePage() {
  return (
    <h1 className="font-bold text-2xl md:mt-[48px]">
      {/* <Banner /> */}
      <Profile />
      <h2>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
        reiciendis! Exercitationem autem repellendus quibusdam ut quia sunt
        consectetur explicabo consequuntur sequi accusamus corporis, ipsa,
        nesciunt quas iste voluptatum quidem suscipit.
      </h2>
    </h1>
  );
}
