import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import client from "../client";
import Button from "./Button";
import Profile from "./Profile";

export default function MoreFromUsCard({ addStyle }) {
  const [morePost, setMorePost] = React.useState([]);

useEffect(() => {
    client
      .fetch(  
        `*[_type == "post"] {
        title,slug,body,mainImage{
          assets -> {
            _id,
            url
          }
          alt
        }
      }`
      )
      .then((data) => setMorePost(data))
      .catch(console.error);
  }, []);

  return (
    <div className={` ${addStyle} MoreFromUsCard   mb-2  py-1 px-3 `}>
      {morePost.map((post) => (
        <>
          <div className="left top" key={post.slug.current}>
            <Link to="/Blog" className="h-full  ">
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className=" h-full object-cover"
              />
            </Link>
          </div>
          <div className="right bottom  ml-2 flex flex-col justify-center ">
            <div className="btn mb-1">
              <Button
                content={post.category}
                eventClicked=" Banner Button"
                addStyles=" text-[.6rem] px-2 tracking-widest "
              />
            </div>

            <div className="wrap ">
              <Link to="/Blog">
                <h3 className="text-sm ">{post.title}</h3>
              </Link>

              <Profile addStyle="flex items-center -mt-2 " />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
