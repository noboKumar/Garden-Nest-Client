import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTipsTable = ({ tips, myTips, setMyTips }) => {
  const { title, category, imageURL, _id } = tips;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete api
        fetch(`http://localhost:3000/tips/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingTips = myTips.filter((tips) => tips._id !== _id);
              setMyTips(remainingTips);
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{title}</th>
      <td>{category}</td>
      <td>
        <img
          className="md:h-32 md:w-44 mx-auto rounded-xl"
          src={imageURL}
          alt="tips image"
        />
      </td>
      <td>
        <div className="flex flex-col gap-2">
          {/* edit button */}
          <Link to={`/updateTips/${_id}`} className="btn">
            <button>
              <TbUserEdit size={30} />
            </button>
          </Link>
          {/* delete button */}
          <button className="btn text-red-500" onClick={handleDelete}>
            <MdDeleteForever size={30} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyTipsTable;
