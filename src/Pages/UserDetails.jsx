import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.data.find((user) => user.id === parseInt(id, 10))
  );

  // If the user is not found, display a message
  if (!user) {
    return <p className="text-red-500 text-center">User not found</p>;
  }

  // Destructure user object with fallback values for address and company
  const {
    name,
    email,
    phone,
    company = { name: "N/A" },
    address = { street: "N/A", city: "N/A" },
  } = user;

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Company:</strong> {company.name}
      </p>
      <p>
        <strong>Address:</strong> {`${address.street}, ${address.city}`}
      </p>
    </div>
  );
};

export default UserDetails;
