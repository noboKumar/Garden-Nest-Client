import React, { useEffect, useState } from "react";
import TopTrendingTipsCard from "./TopTrendingTipsCard";

const TopTrendingTips = () => {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trendingTips")
      .then((res) => res.json())
      .then((data) => {
        setTrendingData(data);
      });
  }, []);
  return (
    <div className="space-y-10">
      <h1 className="text-2xl md:text-4xl font-semibold text-secondary text-center">
        Top Trending:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {trendingData.map((trending) => (
          <TopTrendingTipsCard key={trendingData._id} trending={trending}></TopTrendingTipsCard>
        ))}
      </div>
    </div>
  );
};

export default TopTrendingTips;
