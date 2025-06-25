import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";

const ExploreGardenersCard = ({ gardner }) => {
  const {
    name,
    age,
    experience,
    gender,
    image,
    location,
    specialty,
    totalSharedTips,
    status,
  } = gardner;
  return (
    <div className="rounded-2xl border-2 border-secondary bg-base-200 shadow-sm px-4 py-5 space-y-2 flex flex-col">
      <div className="flex gap-5 flex-1">
        <div>
          <div
            className={`avatar ${
              status === "Active" ? "avatar-online" : "avatar-offline"
            }`}
          >
            <div className="w-32 rounded-full">
              <img src={image} alt="gardner photo" />
            </div>
          </div>
          <p className="text-sm">{specialty}</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-secondary">
            {name}
          </h1>
          <div className="md:text-xl space-y-2">
            <p>Age: {age}</p>
            <p>{experience}</p>
            <p>Gender: {gender}</p>
            <p>Location: {location}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 bg-base-300 px-8 py-1 rounded-2xl">
          <HiOutlineLightBulb size={25} />
          <p className="lg:text-xl">Total Tips Shared: {totalSharedTips}</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreGardenersCard;
