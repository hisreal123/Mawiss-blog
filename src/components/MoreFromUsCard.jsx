import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";
import Button from "./Button";
import Profile from "./Profile";

export default function MoreFromUsCard({ addStyle }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,slug,body,mainImage{
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPost(data.slice(0, -2)))
      .catch(console.error);
  }, []);


  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 2 }}
      className={` ${addStyle} w-full relative  grid grid-cols-2 lg:grid-cols-3 gap-3 `}
    >
      {post.map((post) => (
        <div className=" mb-2  py-1"  key={post.slug.current}>
          <div className="lg:flex">
            <div className="left top">
              <Link
                to={`/blog/${post.slug.current}`}
                className=" h-full relative  "
              >
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className=" relative h-full object-cover"
                />
              </Link>
            </div>
            <div className="right bottom  md:ml-2 flex flex-col ">
              <div className="btn mb-1">
                <Button
                  content="Gamming"
                  eventClicked=" Banner Button"
                  addStyles=" relative self-start  text-[.4rem] md:text-[.5rem] tracking-widest "
                />
              </div>

              <div className="wrap ">
                <Link to={`/blog/${post.slug.current}`}>
                  <h3 className="text-xs  mb-4 ">{post.title}</h3>
                </Link>
              </div>
              <Profile addStyle=" md:flex md:items-center md:-mt-2 " />
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
