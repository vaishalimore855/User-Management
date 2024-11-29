import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="bg-gray-800 p-4 text-white">
    <div className="container mx-auto flex justify-between">
      <Link to="/" className="font-bold text-lg">
        User Management
      </Link>
      <div>
        <Link to="/add-user" className="hover:underline">
          Add User
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
