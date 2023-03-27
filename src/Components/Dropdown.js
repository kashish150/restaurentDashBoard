import React, { Component } from "react";
import Select from "react-select";
import { useState } from "react";
import axios from "axios";

const Dropdown = [
  { label: "Not_processed", value: "Not_processed" },
  { label: "Processing", value: "Processing" },
  { label: "Shipped", value: "Shipped" },
  { label: "Delivered", value: "Delivered" },
  { label: "Cancelled", value: "Cancelled" },
];

const DropDown = (props) => {
  const setoutput = (status) => {
    console.log(status);
    // console.log("called1212");
    axios
      .post("http://localhost:3000/api/order/updateStatus", {
        orderId: props.order._id,
        restaurentId: props.order.restaurent,
        status: status,
      })
      .then((res) => {
        console.log(res.data);
        setStatus(status);
      });
  };

  const [statestatus, setStatus] = useState(props.order.status);
  return (
    <label>
      <select
        value={statestatus}
        onChange={(e) => {
          setoutput(e.target.value);
        }}
      >
        {Dropdown.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default DropDown;
