import React, { use } from "react";
import { Helmet } from "react-helmet";
import { RiMessage3Line } from "react-icons/ri";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";

const ShareGardenTip = () => {
  const { user } = use(AuthContext);
  const handleShareTips = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    fetch("http://localhost:3000/tips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Your Tips Has been Shared",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      });
  };
  return (
    <div>
      <Helmet>
        <title>Garden Nest | Share a Garden Tips</title>
      </Helmet>
      <div className="space-y-5">
        <div className="flex items-center gap-2 justify-center text-secondary">
          <RiMessage3Line size={35} />
          <h1 className="text-4xl font-semibold">Share a Garden Tips:</h1>
        </div>
        <div className="flex justify-center">
          <form onSubmit={handleShareTips}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[500px] border p-5">
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
                    name="availability"
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
                      value={user.displayName}
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
                      readOnly
                      value={user.email}
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
      </div>
    </div>
  );
};

export default ShareGardenTip;
