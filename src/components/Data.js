import React from "react";

const Data = ({ data }) => {
  return (
    <div>
      {/* Renders the required heading asynchronously only when the object updates */}
      {typeof data !== "string" && <h1>Data Fetched from API</h1>}
      
      <pre>
        {typeof data === "string" ? data : JSON.stringify(data)}
      </pre>
    </div>
  );
};

export default Data;