import React from "react";
import { FaRegHeart } from "react-icons/fa";

const TopTrendingTipsCard = ({ trending }) => {
  const { imageURL, title, description, likedBy } = trending;
  return (
    <div className="space-y-2 border-2 border-[#2e7d32] bg-base-200 rounded-2xl px-10 py-6 shadow-sm cursor-pointer">
      {imageURL && (
        <img
          className=" h-40 object-cover rounded-2xl mx-auto"
          src={imageURL}
          alt="trending tips photo"
        />
      )}
      <h1 className="text-2xl text-center">{title}</h1>
      <div className="dark:text-black flex items-center gap-2">
        <FaRegHeart />
        <div>
          <span className="font-bold">Total Liked: </span>
          {likedBy?.length}
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default TopTrendingTipsCard;
