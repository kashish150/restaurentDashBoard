import React from "react";
import DropDown from "./Dropdown";

const Card = (props) => {
  return (
    <>
      <table>
        <tr>
          <td>{props.order._id}</td>
          <td>{props.order.description}</td>
          <td>{props.order.quantityAvailable}</td>
          <td>{props.order.name}</td>
          <td>
            <DropDown order={props.order} />
          </td>
        </tr>
      </table>
    </>
  );
};
export default Card;
//order,card_body,Upper_data,rating,price,lower_data,accept,reject
