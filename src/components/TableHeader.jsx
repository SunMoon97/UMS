import React, { useState } from "react";

const TableHeader = ({ onSort, sortConfig }) => {
  const [prevSortConfig, setPrevSortConfig] = useState(null);

  const getSortIcon = (key) => {
    if ( sortConfig.key === key && sortConfig.direction === "asc") {
      return <span className="ml-2 text-black">🔼</span>;
    } else if (sortConfig.key === key && sortConfig.direction === "desc") {
      return <span className="ml-2 text-black">🔽</span>;
    }
    return <span className="ml-2 text-black">⏹️</span>;
  };

  React.useEffect(() => {
    setPrevSortConfig(sortConfig);
  }, [sortConfig]);

  return (
    <thead className="bg text-transparent bg-gradient-to-r from-purple-500 to-orange-500">
      <tr>
        <th
          className="bg-clip-text text-transparent bg-gray-800 p-3 text-left cursor-pointer"
          onClick={() => onSort("name")}
        >
          Name {getSortIcon("name")}
        </th>

        <th
          className="bg-clip-text text-transparent bg-gray-800 p-3 text-left cursor-pointer"
          onClick={() => onSort("email")}
        >
          Email {getSortIcon("email")}
        </th>
        <th
          className="bg-clip-text text-transparent bg-gray-800 p-3 text-left cursor-pointer"
          onClick={() => onSort("company.name")}
        >
          Company {getSortIcon("company.name")}
        </th>
        <th className="bg-clip-text text-transparent bg-gray-800  p-3 text-left">Phone</th>
        <th className="bg-clip-text text-transparent bg-gray-800  p-3 text-left">Website</th>
        <th className="bg-clip-text text-transparent bg-gray-800  p-3 text-left">Address</th>
      </tr>
    </thead>
  );
};

export default TableHeader;


