import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../Components/Slider";
import ActiveGardener from "../Components/ActiveGardener";
import TopTrendingTips from "../Components/TopTrendingTips";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Garden Nest | Home</title>
      </Helmet>
      <Slider></Slider>
      <ActiveGardener></ActiveGardener>
      <TopTrendingTips></TopTrendingTips>
    </div>
  );
};

export default Home;
