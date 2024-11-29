import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="p-4 border rounded-md shadow">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.company?.name || "N/A"}</p>
      <Link
        to={`/users/${user.id}`}
        className="text-blue-500 underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
