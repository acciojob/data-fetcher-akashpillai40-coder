import React from "react";

const Data = ({ data }) => {
  return (
   <div>

      <pre>
        {typeof data === "string" ? data : JSON.stringify(data)}
      </pre>
    </div>
  );
};

export default Data;