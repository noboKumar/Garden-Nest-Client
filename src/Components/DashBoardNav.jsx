import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import ThemeController from "./ThemeController";

const DashBoardNav = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-base-200 py-5 shadow-sm">
      <div className="flex items-center gap-2 w-11/12 mx-auto justify-between">
        {/* sidebar icon */}
        <div className="flex items-center gap-4">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div>
            <h1 className="text-4xl font-bold">DashBoard</h1>
          </div>
        </div>
        <div>
          {/* user image */}
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
            <ThemeController></ThemeController>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNav;
