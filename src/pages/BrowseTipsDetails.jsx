import React, { use, useState } from "react";
import { Helmet } from "react-helmet";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const BrowseTipsDetails = () => {
  const { category, description, imageURL, level, title, type, _id, likedBy } =
    useLoaderData();
  const { user } = use(AuthContext);
  const userEmail = user.email;
  const [likeCount, setLikeCount] = useState(likedBy?.length || 0);
  const [isLiked, setIsLiked] = useState(likedBy?.includes(userEmail));

  const handleLikeButton = () => {
    fetch(`http://localhost:3000/tips/${_id}/like`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setLikeCount(likeCount + 1);
          setIsLiked(true);
        }
      });
  };
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
          <h1 className="text-2xl md:text-4xl font-semibold text-secondary">
            {title}
          </h1>
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

          <button
            onClick={handleLikeButton}
            className="flex btn text-xl text-secondary bg-base-200 border-secondary"
          >
            {isLiked ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
            Like {likeCount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseTipsDetails;
