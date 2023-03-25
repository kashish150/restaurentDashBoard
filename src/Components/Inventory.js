
import React  from "react";
import {useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Inventory = () => {
    const [data, setData] = useState([]);
    function getData(){
        axios
        .get("https://641c518a1a68dc9e460658c7.mockapi.io/Resturant")
                .then((res) =>{
            console.log(res.data);
            setData(res.data)
        });
    }
    
    function handleDelete (id) {
        axios.delete(
            `https://641c518a1a68dc9e460658c7.mockapi.io/Resturant/${id}`
        )   .then(() =>{
            getData();
        });
        }

    const setToLocalStorage = (id,dish,price,category) => {
        localStorage.setItem("id",id);
        localStorage.setItem("dish",dish);
        localStorage.setItem("price",price);
        localStorage.setItem("category",category);
        
    };
    
    //whenever value changes useefeect hook will be called
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="container">
            <> <h1 id="inv_heading"> Inventory</h1>
            <table >
        <thead>
          <tr >
            <th scope="col">ID</th>
            <th scope="col" >Dish Name</th>
            <th scope="col" >Price</th>
            <th scope="col" >Category</th>
            <th scope="col" ></th>
            <th scope="col" ></th>
          </tr>
        </thead>
        {
         data.map((eachData) =>{ 
            return(
            <>
        <tbody>
          <tr>
            <td >{eachData.id}</td>
            <td >{eachData.dish}</td>
            <td >{eachData.price}</td>
            <td >{eachData.category}</td>
            <td ><Link to="/edit">
              <button className="btn-success"  onClick={()=>setToLocalStorage(eachData.id,eachData.dish,eachData.price,eachData.category)}>
              Edit
                </button>
              </Link>
            </td>
            <td>
            <button className="btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button>
            </td>
          </tr>
          </tbody>
          </>
         );})
        }
      </table>           
      </>
      </div>
    );
    };
export default Inventory;
//inv_heading,btn-success,btn-danger