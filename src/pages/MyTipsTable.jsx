import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";

const MyTipsTable = ({ tips }) => {
  return (
    <tr>
      <th>{tips.title}</th>
      <td>{tips.category}</td>
      <td>
        <img
          className="md:h-32 md:w-44 mx-auto rounded-xl"
          src={tips.imageURL}
          alt=""
        />
      </td>
      <td>
        <div className="flex flex-col gap-2">
          <button className="btn">
            <TbUserEdit size={30} />
          </button>
          <button className="btn text-red-500">
            <MdDeleteForever size={30}/>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyTipsTable;
