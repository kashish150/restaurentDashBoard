import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
// import Inventory from "./Inventory";
import EditProductCards from "./EditProductCards";
import Cookies from "js-cookie";

const AddProduct = () => {
  const [imageUrl, setimageUrl] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [quantityAvailable, setquantityAvailable] = useState(0);
  const [pricePerQuantity, setpricePerQuantity] = useState(0);
  const [orders, setaOrders] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = JSON.parse(
      Cookies.get("token")
    );
    const token = JSON.parse(Cookies.get("token"));
    axios
      .get(`http://localhost:3000/api/product/getAllProducts/`)
      .then((res) => {
        console.log(res.data);
        setaOrders(res.data);
      });
  }, []);

  const history = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.defaults.headers.common["x-auth-token"] = JSON.parse(
      Cookies.get("token")
    );
    axios
      .post("http://localhost:3000/api/product/addProducts", {
        imageUrl: imageUrl,
        name: name,
        description: description,
        quantityAvailable: quantityAvailable,
        pricePerQuantity: pricePerQuantity,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <>
      <div className="Form">
        <h1 id="add">Add Product </h1>
        <form>
          <label className="add_input">
            <b>Dish Name</b>
          </label>
          <input
            type="text"
            className="add_inp"
            name="dish"
            onChange={(e) => setname(e.target.value)}
          />
          <br></br>
          <label className="add_input">
            {" "}
            <b>Price</b>{" "}
          </label>
          <input
            type="number"
            className="add_inp"
            name="price"
            onChange={(e) => setpricePerQuantity(e.target.value)}
          />
          <br></br>
          <label className="add_input">
            <b>Quantity</b>
          </label>
          <input
            type="text"
            className="add_inp"
            name="quantity"
            onChange={(e) => setquantityAvailable(e.target.value)}
          />
          <br></br>
          <label className="add_input">
            <b>Description</b>
          </label>
          <input
            type="text"
            className="add_inp"
            name="quantity"
            onChange={(e) => setdescription(e.target.value)}
          />
          <br></br>
          <label className="add_input">
            <b>Image</b>
          </label>
          <input
            type="text"
            className="add_inp"
            name="quantity"
            onChange={(e) => setimageUrl(e.target.value)}
          />
          <br></br>

          <button type="submit" id="additem" onClick={handlesubmit}>
            SUBMIT
          </button>
        </form>
      </div>
      <div className="inventory">
        products
        {orders.length > 0 ? (
          orders.map((order) => {
            return <EditProductCards order={order} />;
          })
        ) : (
          <div> EMPTY ARRAY</div>
        )}
      </div>
    </>
  );
};
export default AddProduct;
