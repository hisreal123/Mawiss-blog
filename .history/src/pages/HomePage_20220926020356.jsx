import React from "react";
import Banner from "../components/Banner";
import profileDate from "../components/profileDate";

export default function HomePage() {
  return (
    <h1 className="font-bold text-2xl">
      <Banner />
      <profileDate />
    </h1>
  );
}
