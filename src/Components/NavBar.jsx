import React, { use } from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, LogOutUser } = use(AuthContext);
  console.log(user);
  const navBarLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/ExploreGardeners"}>Explore Gardeners</NavLink>
      </li>
      <li>
        <NavLink to={"/BrowseTips"}>Browse Tips</NavLink>
      </li>
      <li>
        <NavLink to={"/ShareGardenTip"}>Share a Garden Tip</NavLink>
      </li>
      <li>
        <NavLink to={"/MyTips"}>My Tips</NavLink>
      </li>
    </>
  );
  const userImg = (
    <>
      <a data-tooltip-id="user-tooltip">
        <img
          className="w-10 h-10 md:w-15 md:h-15 object-cover rounded-full border-2 border-gray-400 md:p-1 cursor-pointer"
          src={user?.photoURL}
          alt="user photo"
        />
      </a>
    </>
  );

  const handleLogOut = () => {
    LogOutUser()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Logged Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="shadow-sm bg-base-200 ">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navBarLinks}
            </ul>
          </div>
          <Link className="btn py-7 btn-ghost md:text-2xl">
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl gap-2 font-medium">
            {navBarLinks}
          </ul>
        </div>
        <div className="navbar-end gap-2 md:gap-5">
          <Tooltip id="user-tooltip">{user?.displayName}</Tooltip>
          {user ? (
            <>
              <div className="dropdown dropdown-bottom dropdown-center">
                <div tabIndex={0} role="button">
                  {userImg}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn bg-red-500 text-white"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-primary text-white px-1 md:px-5"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
