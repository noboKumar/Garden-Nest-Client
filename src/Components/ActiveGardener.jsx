import React, { useEffect, useState } from "react";
import ActiveGardenerCard from "./ActivegardenerCard";

const ActiveGardener = () => {
  const [activeUserData, setActiveUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/activeusers")
      .then((res) => res.json())
      .then((data) => setActiveUserData(data));
  }, []);
  return (
    <div className="space-y-5 my-10">
      <h1 className="text-2xl md:text-4xl font-semibold text-secondary">Active gardeners:</h1>
      <div className="grid grid-cols-3 lg:grid-cols-6">
        {activeUserData.map((gardener) => (
          <ActiveGardenerCard
            key={gardener._id}
            gardener={gardener}
          ></ActiveGardenerCard>
        ))}
      </div>
    </div>
  );
};

export default ActiveGardener;
