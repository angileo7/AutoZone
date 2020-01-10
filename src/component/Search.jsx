import React from "react";

const Search = ({onFilter}) => {
  return (
    <>
      <div>
        <strong>Search:</strong>
        <input
          type="text"
          onChange = { e => {onFilter(e.target.value)}}
        />
      </div>
    </>
  );
}
export default Search;