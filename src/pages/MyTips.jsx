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
                <th>no.</th>
                <th>Title</th>
                <th>Category</th>
                <th className="text-center">image</th>
                <th className="text-center">Button</th>
              </tr>
            </thead>
            <tbody>
              {myTips.map((tips, index) => (
                <MyTipsTable
                  key={tips._id}
                  index={index}
                  tips={tips}
                  myTips={myTips}
                  setMyTips={setMyTips}
                ></MyTipsTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTips;
