import React from "react";
import { Helmet } from "react-helmet";
import { PiPottedPlantBold } from "react-icons/pi";
import { useLoaderData } from "react-router";
import BrowseTipsTable from "./BrowseTipsTable";

const BrowseTips = () => {
  const browseTips = useLoaderData();
  console.log(browseTips);
  return (
    <div>
      <Helmet>
        <title>Garden Nest | Browse Tips</title>
      </Helmet>
      <div className="flex items-center gap-2 justify-center text-secondary">
        <PiPottedPlantBold size={35} />
        <h1 className="text-4xl font-semibold">Browse Tips:</h1>
      </div>
      <div>
        <div className="overflow-x-auto my-10 rounded-box border border-base-content/5 bg-base-200">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Gardener</th>
                <th className="text-center">Image</th>
                <th>See More</th>
              </tr>
            </thead>
            <tbody>
              {browseTips.map((tips) => (
                <BrowseTipsTable key={tips._id} tips={tips}></BrowseTipsTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowseTips;
