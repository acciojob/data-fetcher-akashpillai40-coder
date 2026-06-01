import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import Data from "./Data";

const App = () => {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    // Keep UI smooth by running the task asynchronously in the background loop
    const timer = setTimeout(() => {
      fetch("https://dummyjson.com/products")
        .then((res) => {
          if (!res.ok) throw new Error("Error..!");
          // .json() parses the payload asynchronously
          return res.json(); 
        })
        .then((fetchedData) => {
          // Asynchronously updates the state without interrupting the main thread
          setData(fetchedData); 
        })
        .catch((err) => {
          setData(err.message);
        });
    }, 1000); // 1-second timeout delay

    // Cleanup reference prevents background memory operations if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="main">
      <Data data={data} />
    </div>
  );
};

export default App;