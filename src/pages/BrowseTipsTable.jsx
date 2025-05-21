import React from "react";
import { FaRegEye } from "react-icons/fa";

const BrowseTipsTable = ({ tips }) => {
  const { category, imageURL, title } = tips;
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
          <button className="btn px-1 md:px-6">
            <FaRegEye size={20} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default BrowseTipsTable;
