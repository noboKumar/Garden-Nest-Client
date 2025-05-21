import React from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router";

const BrowseTipsTable = ({ tips }) => {
  const { category, imageURL, title, _id } = tips;
  return (
    <>
      <tr>
        <th>{title}</th>
        <td>{category}</td>
        <td>
          {imageURL && (
            <img
              className="md:h-32 md:w-44 mx-auto rounded-xl"
              src={imageURL}
              alt="tips photo"
            />
          )}
        </td>
        <td>
          <Link to={`/BrowseTips/${_id}`}>
            <button className="btn px-1 md:px-6">
              <FaRegEye size={20} />
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default BrowseTipsTable;
