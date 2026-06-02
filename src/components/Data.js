import React from "react";

const Data = ({ data }) => {
  return (
    <div>
      {/* Renders the required heading once loading completes */}
      {typeof data !== "string" && <h1>Data Fetched from API</h1>}
      
      {/* 🎯 Formatted stringified output matching strict test assertions */}
      <pre>
        {typeof data === "string" ? data : JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default Data;