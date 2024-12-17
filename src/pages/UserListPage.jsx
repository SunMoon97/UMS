import React, { useState } from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";

const UserListPage = () => {
  const { users, loading, error } = useFetchUsers();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => setSearchTerm(term);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="p-4 min-h-screen ">  
      <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500 text-center text-4xl font-bold p-4 mb-4 rounded-md shadow-lg ">
        User Management Dashboard
      </h1>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

      <div className="overflow-x-auto">
        <UserTable users={users} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default UserListPage;
    