import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EditProduct = () =>{
  const [name, setName] = useState("");
    const [id, setId] = useState(0)
    const [dish, setDish] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
   
    useEffect(() => {
             setName(localStorage.getItem("id"));
        setAddress(localStorage.getItem("dish"));
        setAge(localStorage.getItem("price"));
        setContact(localStorage.getItem("category"));
     
    }, []) 
    
    const navigate =useNavigate();
    const update =(e)=>{
        e.preventDefault();
      axios.put(`https://641c518a1a68dc9e460658c7.mockapi.io/Zomato_Resturant/${id}`,{
     id: id
     }).then(()=>{
        navigate("/inventory");
      });
    };
return(
    
  <div className='Form'>
  <h1 id="add">Edit Product </h1>
  <form><label className='add_input'><b>Product ID</b></label>
    <input type="number" className='add_inp' value={id} onChange={(e)=> setAddress(e.target.value)}/><br></br>
    <label className='add_input'><b>Dish Name</b></label>
    <input type="text" className='add_inp' value={dish} onChange={(e)=> setAddress(e.target.value)}/><br></br>
    <label className='add_input'> <b>Price</b> </label>
    <input type="number" className='add_inp' value={price} onChange={(e)=> setAddress(e.target.value)}/><br></br>
    <label className='add_input'> <b>Food Type</b> </label>
    <select className='add_inp' id="select" value={category} onChange={(e)=> setAddress(e.target.value)}><br></br>
      <option>Veg</option>
      <option>Non-Veg</option>
    </select><br></br>
    <button id="edit_btn" onClick={handleupdate}>Save Changes</button>
  </form>
</div> 

)

}
export default EditProduct;