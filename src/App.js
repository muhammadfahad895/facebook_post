import "./App.css";
import FacebookPost from "./Components/FacebookPost";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((res) => setData(res.products));
  }, []);

  return (
    <>
      {data.map((_data) => {
        return (
          <div className="container">
            <div className="facebook-post">
              <FacebookPost data={_data} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
