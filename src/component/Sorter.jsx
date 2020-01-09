import React from "react";

function Sorter({ orderBy, field }) {

  return (
    <>
      <span>Sort by: {field}</span><strong></strong>
        <strong>{orderBy}</strong>
    </>
  );
}

export default Sorter;