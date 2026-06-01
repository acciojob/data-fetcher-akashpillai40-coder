import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import Data from "./Data";

const App = () => {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    const timer = setTimeout(() => {
      
   
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
     }, 1000);
     return () => clearTimeout(timer);
  }, []);

  return (
    <div id="main">
      <Data data={data} />
    </div>
  );
};

export default App;
