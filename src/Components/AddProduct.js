import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate ,NavLink } from "react-router-dom";
import Inventory from "./Inventory";

const AddProduct = () => {
  const [id, setId] = useState("");
  const [dish, setDish] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const history =useNavigate();
  const header={"Access-Control-Allow-Origin": "*"};
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.post("https://641c518a1a68dc9e460658c7.mockapi.io/Resturant",{
      id  :id,
      dish : dish,
      price : price,
      category :category,
       })
    .then(() => {
      history("/inventory");
    });
  };
return (
  <>
    <div className='Form'>
      <h1 id="add">Add Product </h1>
      <form><label className='add_input'><b>Product ID</b></label>
        <input type="number" className='add_inp'name="id" onChange={(e)=> setId(e.target.value)}/><br></br>
        <label className='add_input'><b>Dish Name</b></label>
        <input type="text" className='add_inp' name="dish" onChange={(e)=> setDish(e.target.value)}/><br></br>
        <label className='add_input'> <b>Price</b> </label>
        <input type="number" className='add_inp' name="price" onChange={(e)=> setPrice(e.target.value)}/><br></br>
        <label className='add_input'> <b>Food Type</b> </label>
        <select className='add_inp' id="select" name="category" onChange={(e)=> setCategory(e.target.value)}><br></br>
          <option>Veg</option>
          <option>Non-Veg</option>
        </select><br></br>
 <button type="submit" id="additem" onClick={handlesubmit}> Add Dish </button> 
      </form>
    </div>
    <div className="inventory">
    <Inventory/>
    </div>
    </>    
  )
}
export default AddProduct ;
//form ,add ,add_inp,add_input,additem