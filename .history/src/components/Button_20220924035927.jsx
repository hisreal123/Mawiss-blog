import React from "react";

export default function Button({ type, content }) {
  return (
    <button
      type=" button"
      className="uppercase text-white bg-red-600 hover:shadow-md border-2 border-red-600 text-sm md:text-md "
    >
      {content}
    </button>
  );
}