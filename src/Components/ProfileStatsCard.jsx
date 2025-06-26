import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import axios from "axios";

const ProfileStatsCard = () => {
  const { user } = use(AuthContext);
  const [allTipsCount, setAllTipsCount] = useState(0);
  const [myTipsCount, setMyTipsCount] = useState(0);
  const [mostLiked, setMostLiked] = useState({ title: "", likes: 0 });

  useEffect(() => {
    // Fetch all tips
    axios.get("http://localhost:3000/tips").then((res) => {
      setAllTipsCount(res.data.length);
    });

    // Fetch my tips
    axios
      .post("http://localhost:3000/myTips", { email: user.email })
      .then((res) => {
        setMyTipsCount(res.data.length);
      });

    axios
      .post("http://localhost:3000/myMostLikedTip", { email: user.email })
      .then((res) => {
        setMostLiked(res.data);
      });
  }, [user.email]);
  console.log(mostLiked);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-base-200 border border-primary rounded-2xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        {/* Profile Photo */}
        <div className="flex-shrink-0 flex justify-center">
          <div className="avatar">
            <div className="w-32 h-32 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} alt="" />
            </div>
          </div>
        </div>

        {/* Name & Email */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
          <h2 className="text-2xl font-bold">{user.displayName}</h2>
          <p className="text-base text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 shadow-sm rounded-xl">
        <div className="stats stats-vertical md:stats-horizontal shadow w-full">
          <div className="stat place-items-center">
            <div className="stat-title text-sm">All Posts</div>
            <div className="stat-value">{allTipsCount}</div>
            <div className="stat-desc">Total Post</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title text-sm">My Posts</div>
            <div className="stat-value">{myTipsCount}</div>
            <div className="stat-desc">Total My posts</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title text-sm">Top Liked</div>
            <div className="stat-value">{mostLiked.likesCount}</div>
            <div className="stat-desc">{mostLiked?.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatsCard;
