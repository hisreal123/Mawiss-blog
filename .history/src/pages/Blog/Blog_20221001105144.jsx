import React from "react";
import Banner from "../../components/Banner";
import MoreFromUsCard from "../../components/MoreFromUsCard";
import PostCard from "../../components/PostCard";
import "./Blog.scss";
import client from "../../client.js";

export default function Blog() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
        title,slug,body,mainImage{
          asset ->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  // console.log(post);

  return (
    <div className="">
      <Banner />

      <div className="Blog-CArds flex flex-col ">
        <div className=" Overlapping-cards -translate-y-20 flex  justify-center">
          <div className=" PostCard-container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6  md:cursor-pointer mx:auto max-w-[78%] md:max-w-[80%] z-50 ">
            <PostCard addStyles="transition-all duration-150 md:hover:shadow-xl px-5 py-2 text-white h-[200px] flex justify-between flex-col  hover:scale-105 " />
            <PostCard addStyles="transition-all duration-150 md:hover:shadow-xl px-5 py-2  text-white h-[200px] md:flex justify-between flex-col  hidden hover:scale-105 " />
            <PostCard addStyles="transition-all duration-150 md:hover:shadow-xl px-5 py-2  text-white h-[200px] lg:flex justify-between flex-col  hidden hover:scale-105 " />
          </div>
        </div>

        <div className="MoreFromUs pb-20 container px-7 h-full md:w-[80%] md:mx-auto  relative ">
          <h2 className="text-md font-bold mb-3 mt-8 "> More From Us</h2>
          <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 w-full relative ">
            <MoreFromUsCard addStyle="flex h-28" />
          </div>
        </div>

        <div className="Articles pb-20  bg-black">
          <div className="Articles  container px-7 h-full md:w-[80%] md:mx-auto  relative ">
            <h2 className="text-white text-md font-bold mb-4 mt-8 text-center ">
              {" "}
              Articles You May Know
            </h2>
            <div className="flex items-center justify-center w-full   overflow-hidden flex-nowrap ">
              <PostCard addStyles=" basis-1/2 h-[200px] flex text-white flex-col  justify-between  " />
              <PostCard addStyles=" basis-1/4 h-[200px] md:flex text-white flex-col ml-2 justify-between  hidden " />
              <PostCard addStyles=" basis-1/4 h-[200px] lg:flex text-white flex-col ml-2 justify-between  hidden " />
            </div>
          </div>
        </div>

        <div className="RecentPost container px-7 py-20 lh-ful md:w-[80%] md:mx-auto  relative">
          <h1 className="text-md font-bold mb-4 mt-8 "> Recent Post</h1>
          <div className="RecentPostCard grid md:grid-cols-2 lg:grid-cols-4 gap-4  md:px-0 ">
            <MoreFromUsCard />
            <MoreFromUsCard />
            <MoreFromUsCard />
            <MoreFromUsCard />
            <MoreFromUsCard addStyle="hidden md:block" />
            <MoreFromUsCard addStyle="hidden md:block" />
            <MoreFromUsCard addStyle="hidden md:block" />
            <MoreFromUsCard addStyle="hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  );
}
