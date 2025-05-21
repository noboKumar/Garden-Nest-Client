import React, { use, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { GiTreeBranch } from "react-icons/gi";
import { AuthContext } from "../provider/AuthContext";
import MyTipsTable from "./MyTipsTable";

const MyTips = () => {
  const { user } = use(AuthContext);
  const [myTips, setMyTips] = useState([]);
  const userEmail = user.email;

  useEffect(() => {
    if (userEmail) {
      fetch("http://localhost:3000/myTips", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      })
        .then((res) => res.json())
        .then((data) => {
          setMyTips(data);
        });
    }
  }, [userEmail]);
  console.log(myTips);
  return (
    <div className="space-y-5">
      <Helmet>
        <title>Garden Nest | My Tips</title>
      </Helmet>
      <div className="flex items-center gap-2 justify-center text-secondary">
        <GiTreeBranch size={35} />
        <h1 className="text-4xl font-semibold">My Tips:</h1>
      </div>
      <div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th className="text-center">image</th>
                <th className="text-center">Button</th>
              </tr>
            </thead>
            <tbody>
              {myTips.map((tips) => (
                <MyTipsTable
                  key={tips._id}
                  tips={tips}
                  myTips={myTips}
                  setMyTips={setMyTips}
                ></MyTipsTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-base-200">
              ✕
            </button>
          </form>
          <form>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[400px] mx-auto border p-5">
              {/* title */}
              <label className="label text-sm">Title</label>
              <input
                required
                name="title"
                type="text"
                className="input w-full"
                placeholder="Enter Tips Title"
              />
              {/* plant type */}
              <label className="label text-sm">Plant Type</label>
              <input
                name="type"
                type="text"
                className="input w-full"
                placeholder="Enter plant Type"
              />
              {/* difficulty level */}
              <label className="label text-sm">Difficulty Level</label>
              <select
                name="level"
                defaultValue="Pick a color"
                className="select w-full"
              >
                <option disabled={true}>Pick a Level</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
              {/* description */}
              <label className="label text-sm">Description</label>
              <textarea
                name="description"
                className="textarea w-full"
                placeholder="Enter Description Here"
              ></textarea>
              {/* image URL */}
              <label className="label text-sm">Image URL</label>
              <input
                name="imageURL"
                type="text"
                className="input w-full"
                placeholder="Enter Image URL here"
              />
              <div className="flex gap-2">
                <div>
                  <label className="label text-sm">Category:</label>
                  <select
                    name="category"
                    defaultValue="Pick a color"
                    className="select w-full"
                  >
                    <option disabled={true}>Pick a category</option>
                    <option>Composting</option>
                    <option>Plant Care</option>
                    <option>Vertical Gardening</option>
                    <option>Garden Bugs</option>
                  </select>
                </div>
                <div>
                  <label className="label text-sm">Availability:</label>
                  <select
                    name="status"
                    defaultValue="Pick a color"
                    className="select w-full"
                  >
                    <option disabled={true}>select availability</option>
                    <option>Public</option>
                    <option>Hidden</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  {/* user name */}
                  <label className="input validator w-full">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </g>
                    </svg>
                    <input
                      readOnly
                      //   value={user.displayName}
                      type="text"
                      required
                      placeholder="Username"
                    />
                  </label>
                </div>
                {/* email */}
                <div>
                  <label className="input validator w-full">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    <input
                      name="email"
                      readOnly
                      //   value={user.email}
                      type="email"
                      placeholder="mail@site.com"
                      required
                    />
                  </label>
                </div>
              </div>
              {/* button */}
              <button className="btn btn-secondary">Submit</button>
            </fieldset>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyTips;
