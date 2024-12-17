import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className=" mb-4 flex justify-center ">
      <input
        type="text"
        placeholder="Search users by name or email..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className=" w-full md:w-1/2 p-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>
  );
};

export default SearchBar;
