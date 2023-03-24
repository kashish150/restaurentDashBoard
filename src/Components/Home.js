import React from 'react'
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
<>
      <div className='image'>
        <img src="https://i.pinimg.com/736x/0d/bb/dd/0dbbdd2944e06b540a3341c8d6a801e4.jpg" height="320px" width="500px"></img>
      </div>
<h3 id="heading"> Restaurant Partner dashboard</h3> 
<NavLink to="/login" id="loginlink"> <button type="submit" id="login" >  Login </button>  </NavLink> <br/> 
<NavLink to="/register" id="registerlink"> <button type="submit" id="register" > Register</button>  </NavLink>
</>
  )
}

export default Home ;
