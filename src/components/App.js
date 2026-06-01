import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  // Initialize the exact required string state
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    // 1-second background timeout wrapper
    const timer = setTimeout(() => {
      fetch("https://dummyjson.com/products")
        .then((res) => {
          if (!res.ok) throw new Error("Error..!");
          return res.json(); // Parse incoming payload asynchronously
        })
        .then((fetchedData) => {
          // Asynchronously update state on the background event loop
          setData(fetchedData);
        })
        .catch((err) => {
          setData(err.message);
        });
    }, 1000);

    // Strict clear reference to clean up memory side-effects 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="main">
      {/* 🎯 Conditionally render the heading once the string turns into an object */}
      {typeof data !== "string" && <h1>Data Fetched from API</h1>}
      
      {/* 🎯 Raw layout output tag matching exact test suite assertions */}
      <pre>
        {typeof data === "string" ? data : JSON.stringify(data)}
      </pre>
    </div>
  );
};

export default App;