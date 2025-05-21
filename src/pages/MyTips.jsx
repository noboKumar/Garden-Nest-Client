import React from "react";
import { Helmet } from "react-helmet";
import { GiTreeBranch } from "react-icons/gi";

const MyTips = () => {
  return (
    <div>
      <Helmet>
        <title>Garden Nest | My Tips</title>
      </Helmet>
      <div className="flex items-center gap-2 justify-center text-secondary">
        <GiTreeBranch size={35} />
        <h1 className="text-4xl font-semibold">My Tips:</h1>
      </div>
    </div>
  );
};

export default MyTips;
