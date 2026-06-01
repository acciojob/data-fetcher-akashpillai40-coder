import React from "react";

const Data = ({ data }) => {
  return (
    <div>
    
      {typeof data !== "string" && <h1>Data Fetched from API</h1>}
      
      <pre>
        {typeof data === "string" ? data : JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default Data;