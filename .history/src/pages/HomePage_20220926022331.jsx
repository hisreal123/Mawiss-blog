import React from "react";
import Banner from "../components/Banner";
import profileDate from "../components/Profile";

export default function HomePage() {
  return (
    <h1 className="font-bold text-2xl">
      <Banner />
      <Profile />
    </h1>
  );
}
