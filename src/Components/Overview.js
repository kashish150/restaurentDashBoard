import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const [orders, setorder] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("token") === undefined) {
      navigate("/login");
    } else {
      const token = Cookies.get("token");

      if (!token) {
        navigate("/login");
      }

      axios.defaults.headers.common["x-auth-token"] = JSON.parse(
        Cookies.get("token")
      );
      axios
        .get(`http://localhost:3000/api/order/getRestaurentOrders`)
        .then((res) => {
          console.log(res.data);
          setorder(res.data);
        });
    }
  }, []);

  return (
    <div>
      <span>
        <h2> Welcome Back La-Pinoz-Pizza </h2>
      </span>
      <hr></hr>
      <div>
        <h2>New Orders</h2>
        <br></br>
        {orders.length > 0 ? (
          <div>
            {orders.map((order) => {
              console.log(order);
              return <Card order={order} />;
            })}
          </div>
        ) : (
          <div>Empty</div>
        )}
      </div>
    </div>
  );
};

export default Overview;
//overview,orderhead,dropdownc,left_align
