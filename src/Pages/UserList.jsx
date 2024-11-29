import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";

import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";

const UserList = () => {
  const dispatch = useDispatch();
  const { data: users, status, error } = useSelector((state) => state.users);
  const [query, setQuery] = useState("");

  // Fetch users when the component loads if not already fetched
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  // Filter users based on the search query
  const filteredUsers = query
    ? users.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase())
      )
    : users;

  // Render different states
  if (status === "loading") {
    return <p className="text-center text-blue-500">Loading...</p>;
  }

  if (status === "failed") {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-4">
      {/* Search Bar */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* No Results Message */}
      {filteredUsers.length === 0 && query && (
        <p className="text-center text-gray-500 mt-4">
          No users found for "{query}".
        </p>
      )}

      {/* User List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
