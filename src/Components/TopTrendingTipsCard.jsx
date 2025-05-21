import React from "react";

const TopTrendingTipsCard = ({ trending }) => {
  const { imageURL, title, description } = trending;
  return (
    <div className="space-y-2 border-2 border-secondary bg-base-200 rounded-2xl px-10 py-6 shadow-sm cursor-pointer">
      {imageURL && (
        <img
          className=" h-40 object-cover rounded-2xl mx-auto"
          src={imageURL}
          alt="trending tips photo"
        />
      )}
      <h1 className="text-2xl text-center">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TopTrendingTipsCard;
