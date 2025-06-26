import React from "react";
import { NavLink } from "react-router";
import Logo from "./Logo";

const SideBar = () => {
  return (
    <div className="drawer-side border-r border-gray-300">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-xl space-y-2">
        <div className="py-2 border-b-2 mb-2">
          <Logo></Logo>
        </div>
        {/* Sidebar content here */}
        <li>
          <NavLink to={"/dashBoard"} end >My Profile</NavLink>
        </li>
        <li>
          <NavLink to={"/dashBoard/MyTips"}>My Tips</NavLink>
        </li>
        <li>
          <NavLink to={"/dashBoard/ShareGardenTip"}>Share a Garden Tip</NavLink>
        </li>
        <li>
          <NavLink to={"/dashBoard/allTips"}>All Tips</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
