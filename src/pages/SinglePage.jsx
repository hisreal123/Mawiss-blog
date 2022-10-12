import BlockContent from "@sanity/block-content-to-react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import Button from "../components/Button";

export default function SinglePage() {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current  == "${slug}"]
    {
      title, body, mainImage {
        asset ->{
          _id, url 
        },
        alt
      }
    }`
      )
      .then((data) => setSinglePost(data[0]));
    setisLoading();
  }, [slug]);
  return (
    <section className="px-3 md:mt-[48px]">
      <h1 className="font-bold text-2xl  mt-2 mb-2">
        {isLoading ? (
          <h1>Loading .....</h1>
        ) : (
          <h1 className="truncate">{singlePost.title}</h1>
        )}
      </h1>

      <motion.div
        initial={{ y: 100, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 1, duration: 0.8 }}
        className="PodtBody "
      >
        <BlockContent
          blocks={singlePost.body}
          projectId="ops89y79"
          dataset="production"
        />
      </motion.div>

      <Link to="/blog">
        <Button content="Back to home" addStyles="my-10 px-2 py-1 " />
      </Link>
    </section>
  );
}
