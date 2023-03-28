import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
const EditProductCards = (props) => {
  const [imageUrl, setimageUrl] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [quantityAvailable, setquantityAvailable] = useState(0);
  const [pricePerQuantity, setpricePerQuantity] = useState(0);
  function handlesavechanges(order) {
    console.log(order);
    axios.defaults.headers.common["x-auth-token"] = JSON.parse(
      Cookies.get("token")
    );
    axios
      .put(`http://localhost:3000/api/product/updateProducts`, {
        imgUrl: imageUrl.length > 0 ? imageUrl : order.imageUrl,
        name: name.length > 0 ? name : order.name,
        description: description.length > 0 ? description : order.description,
        quantityAvailable:
          quantityAvailable > 0 ? quantityAvailable : order.quantityAvailable,
        pricePerQuantity:
          pricePerQuantity > 0 ? pricePerQuantity : order.pricePerQuantity,
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  function handleEditOption() {
    setedit(!edit);
  }
  const [edit, setedit] = useState(false);

  return (
    <>
      <table>
        <tr>
          <td>{props.order._id}</td>
          <td>{props.order.name}</td>
          <td>{props.order.pricePerQuantity}</td>
          <td>{props.order.quantityAvailable}</td>
          <td>
            <div onClick={handleEditOption}>Edit</div>
          </td>
          <td>
            {edit && (
              <div>
                <h1 id="add">Add Product </h1>

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

                <button
                  onClick={() => {
                    handlesavechanges(props.order);
                  }}
                >
                  SUBMIT
                </button>
              </div>
            )}
          </td>
        </tr>
      </table>
    </>
  );
};
export default EditProductCards;
//inv_heading,btn-success,btn-danger
