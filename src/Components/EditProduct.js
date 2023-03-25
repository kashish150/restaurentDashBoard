import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EditProduct = () =>{
    const [id, setId] = useState("")
    const [dish, setDish] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
   
    useEffect(() => {
             setId(localStorage.getItem("id"));
        setDish(localStorage.getItem("dish"));
        setPrice(localStorage.getItem("price"));
        setCategory(localStorage.getItem("category"));
     
    }, []) 
    
    const navigate =useNavigate();
    const handleupdate =(e)=>{
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
    <input type="number" className='add_inp' value={id} onChange={(e)=> setId(e.target.value)}/><br></br>
    <label className='add_input'><b>Dish Name</b></label>
    <input type="text" className='add_inp' value={dish} onChange={(e)=> setDish(e.target.value)}/><br></br>
    <label className='add_input'> <b>Price</b> </label>
    <input type="number" className='add_inp' value={price} onChange={(e)=> setPrice(e.target.value)}/><br></br>
    <label className='add_input'> <b>Food Type</b> </label>
    <select className='add_inp' id="select" value={category} onChange={(e)=> setCategory(e.target.value)}><br></br>
      <option>Veg</option>
      <option>Non-Veg</option>
    </select><br></br>
    <button id="edit_btn" onClick={handleupdate}>Save Changes</button>
  </form>
</div> 

)

}
export default EditProduct;
//form ,add ,add_inp,add_input,edit_btn