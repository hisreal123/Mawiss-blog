import React from "react";

export default function Button({ content , eventClicked , addStyles}) {
  return (
    <button
      type=" button"
      className={` ${adduppercase text-white bg-red-600 hover:shadow-md border-2 border-red-600 text-sm md:text-md {` ${add
    
     onClick={()=>{console.log({eventClicked})}}>
      {content}
    </button>
  );
}
