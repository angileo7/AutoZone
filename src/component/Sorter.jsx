import React from "react";

function Sorter({ orderBy, field, onClick }) {

  return (
    <>
      <span>Sort by: {field}</span><strong></strong>
        
        <span onClick={()=>onClick()}><strong>Order{orderBy}</strong></span>
    </>
  );
}

export default Sorter;