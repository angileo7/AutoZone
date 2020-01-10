import React from "react";

function Sorter({ orderBy, field, onClick }) {

  return (
    <>
      <span>Sort by: {field}</span><strong></strong>
        
        <button onClick={()=>onClick()}><strong>Order{orderBy}</strong></button>
    </>
  );
}

export default Sorter;