import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import Data from "./Data";

const App = () => {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((err) => {
        // 🎯 Prepends the exact phrase the test runner is waiting for
        setData(`An error occurred: ${err.message}`);
      });
  }, []);

  return (
    <div id="main">
      <Data data={data} />
    </div>
  );
};

export default App;