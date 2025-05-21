import React from "react";
import { Helmet } from "react-helmet";
import { FaRegHeart } from "react-icons/fa";
import { useLoaderData } from "react-router";

const BrowseTipsDetails = () => {
  const { category, description, imageURL, level, title, type } =
    useLoaderData();
  return (
    <div className="border-2 border-secondary bg-base-200 space-y-4 px-10 py-5 rounded-2xl">
      <Helmet>
        <title>Garden Nest | Tips Details</title>
      </Helmet>
      <h1 className="text-4xl font-semibold">Tips Details:</h1>
      <div className="lg:flex gap-10 space-y-5">
        <div className="lg:w-5/12">
          <img className="lg:min-w-[500px] rounded-4xl" src={imageURL} alt="" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-semibold text-secondary">{title}</h1>
          <p className="text-xl">
            <span className="font-bold">Level:</span> {level}
          </p>
          <p className="text-xl">
            <span className="font-bold">Category:</span> {category}
          </p>
          <p className="text-xl">
            <span className="font-bold">Plant Type:</span> {type}
          </p>
          <p className="md:text-2xl lg:w-6/12">{description}</p>

          <button className="flex btn text-xl text-secondary bg-base-300">
            <FaRegHeart size={25} />
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseTipsDetails;
