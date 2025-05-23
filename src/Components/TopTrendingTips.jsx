import React, { use, useEffect, useState } from "react";
import TopTrendingTipsCard from "./TopTrendingTipsCard";
import { AuthContext } from "../provider/AuthContext";
import Loading from "./Loading";

const TopTrendingTips = () => {
  const [trendingData, setTrendingData] = useState([]);
  const { loading, setLoading } = use(AuthContext);

  useEffect(() => {
    setLoading(true);
    fetch("https://ph-assignment-10-server-pi.vercel.app/trendingTips")
      .then((res) => res.json())
      .then((data) => {
        setTrendingData(data);
        setLoading(false);
      });
  }, [setLoading]);
  return (
    <div className="space-y-10">
      {loading && <Loading></Loading>}
      <h1 className="text-2xl md:text-4xl font-semibold text-secondary text-center">
        Top Trending:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {trendingData.map((trending) => (
          <TopTrendingTipsCard
            key={trending._id}
            trending={trending}
          ></TopTrendingTipsCard>
        ))}
      </div>
    </div>
  );
};

export default TopTrendingTips;
