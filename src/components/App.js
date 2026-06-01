import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import Data from "./Data";

const App = () => {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    
      fetch("https://dummyjson.com/products")
        .then((res) => {
          if (!res.ok) throw new Error("Error..!");
          return res.json();
        })
        .then((fetchedData) => {
          setData(fetchedData);
        })
        .catch((err) => {
          setData(err.message);
        });
    
  }, []);

  return (
    <div>
      <Data data={data} />
    </div>
  );
};

export default App;
