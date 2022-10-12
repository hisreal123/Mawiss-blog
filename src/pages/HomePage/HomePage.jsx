import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function HomePage() {
  return (
    <div className=" h-screen">
      <h1 className="font-bold text-2xl md:mt-[48px]  mb-2 ">Home Page</h1>
      <Link to="/Blog">
        <Button content="Got to Blog " addStyles=" px-3 py-1 mb-4" />
      </Link>
    </div>
  );
}
