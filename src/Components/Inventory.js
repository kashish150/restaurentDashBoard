import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Inventory = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://641c518a1a68dc9e460658c7.mockapi.io/Zomato_Resturant")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  const setToLocalStorage = (id, dish, price, category) => {
    localStorage.setItem("id", id);
    localStorage.setItem("dish", dish);
    localStorage.setItem("price", price);
    localStorage.setItem("category", category);
  };

  //whenever value changes useefeect hook will be called
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div class="container_inventory">
 <h1> Items Available</h1>
      </div>
      {data.map((eachData) => {
        return (
          <>
            {eachData.id}
            {eachData.dish}
            {eachData.price}
            {eachData.category}
            <Link to="/edit">
              <button
                className="btn-success"
                onClick={() =>
                  setToLocalStorage(
                    eachData.id,
                    eachData.dish,
                    eachData.price,
                    eachData.category
                  )
                }
              >
                {" "}
              </button>
              <button>Edit</button>
            </Link>
          </>
        );
      })}
    </>
  );
};
export default Inventory;
