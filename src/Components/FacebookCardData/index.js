import { useEffect, useState } from "react";

const FacebookCardData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((res) => setData(res.products));
  }, []);
  // return (
  //   <div>
  //     {data.map(({ brand, description, images }) => {
  //       return (
  //         <>
  //           <h1>{brand}</h1>
  //           <p>{description}</p>
  //           {images.map((img) => {
  //             return <img src={img} alt="" />;
  //           })}
  //         </>
  //       );
  //     })}
  //   </div>
  // );
};

export default FacebookCardData;
