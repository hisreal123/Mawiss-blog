import React from "react";
import { HiChevronDoubleUp } from "react-icons/hi";
export default function ToTop({ id }) {
  return (
    <div className="z-50 bg-white fixed right-2  bottom-5 rounded-full p-2 h-10 w-10 shadow-md cursor-pointer hover:bg-black hover:text-white text-center flex items-center  justify-center  transition-all duration-200 scale-105 hover:scale-110 ">
      <a href={id}>
        <HiChevronDoubleUp />
      </a>
    </div>
  );
}
