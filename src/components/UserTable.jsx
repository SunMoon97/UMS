import React, { useState } from "react";
import TableHeader from "./TableHeader";

const UserTable = ({ users, searchTerm }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort users based on selected column
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = sortConfig.key.includes(".")
        ? a.company.name.toLowerCase()
        : a[sortConfig.key].toLowerCase();
      const bValue = sortConfig.key.includes(".")
        ? b.company.name.toLowerCase()
        : b[sortConfig.key].toLowerCase();
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <table className="mx-auto  table-auto bg-white shadow-md rounded-md overflow-hidden">
      <TableHeader onSort={handleSort} sortConfig={sortConfig} />
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id} className="hover:bg-gray-100">
            <td className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500 font-bold p-3 border">{user.name}</td>
            <td className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500 font-bold p-3 border">{user.email}</td>
            <td className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500 font-bold p-3 border">{user.company.name}</td>
            <td className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500 font-bold p-3 border">{user.phone}</td>
            <td className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500 font-bold p-3 border">{user.website}</td>
            <td className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500 font-bold p-3 border">
              {user.address.street}, {user.address.city}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
