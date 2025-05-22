import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { PiPottedPlantBold } from "react-icons/pi";
import { useLoaderData } from "react-router";
import BrowseTipsTable from "./BrowseTipsTable";

const BrowseTips = () => {
  const initialTips = useLoaderData();
  const [browseTips, setBrowseTips] = useState(initialTips);
  const [selectedLevel, setSelectedLevel] = useState("");

  useEffect(() => {
    selectedLevel &&
      fetch(
        `https://ph-assignment-10-server-pi.vercel.app/tips/${selectedLevel}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBrowseTips(data);
        });
  }, [selectedLevel]);

  const handleSorting = (e) => {
    const level = e.target.value;
    setSelectedLevel(level);
  };
  return (
    <div className="space-y-5">
      <Helmet>
        <title>Garden Nest | Browse Tips</title>
      </Helmet>
      <div className="flex items-center gap-2 justify-center text-[#2e7d32]">
        <PiPottedPlantBold size={35} />
        <h1 className="text-4xl font-semibold">Browse Tips:</h1>
      </div>
      <div className="text-center">
        <form>
          <select
            onChange={handleSorting}
            defaultValue={selectedLevel}
            className="select bg-base-200"
          >
            <option value={""} disabled={true}>
              Filter by Level
            </option>
            <option value={"Easy"}>Easy</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Hard"}>Hard</option>
          </select>
        </form>
      </div>
      <div>
        <div className="overflow-x-auto my-10 rounded-box border border-base-content/5 bg-base-200">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Level</th>
                <th>Category</th>
                <th className="text-center">Image</th>
                <th>See More</th>
              </tr>
            </thead>
            <tbody>
              {browseTips.map((tips, index) => (
                <BrowseTipsTable
                  index={index}
                  key={tips._id}
                  tips={tips}
                ></BrowseTipsTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowseTips;
