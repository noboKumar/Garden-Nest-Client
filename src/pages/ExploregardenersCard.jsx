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
    status
  } = gardner;
  return (
    <div className="rounded-2xl border-2 border-secondary shadow-sm px-8 lg:px-12 py-5 space-y-2">
      <div className="flex gap-5">
        <div className="space-y-1.5 flex-1/2">
          <img
            className="min-w-32 min-h-32 lg:min-w-40 lg:min-h-40 rounded-full"
            src={image}
            alt="gardner photo"
          />
          <p>{specialty}</p>
          <p>status: {status}</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-green-800">{name}</h1>
          <div className="md:text-xl space-y-2">
            <p>Age: {age}</p>
            <p>{experience}</p>
            <p>Gender: {gender}</p>
            <p>Location: {location}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-base-300 px-8 py-1 rounded-2xl">
        <HiOutlineLightBulb size={25} />
        <p className="lg:text-xl">
          Total Tips Shared: {totalSharedTips}
        </p>
      </div>
    </div>
  );
};

export default ExploreGardenersCard;
