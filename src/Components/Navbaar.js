import React from 'react'

const Navbaar = () => {
  return (
    <div className='navbaar'>
<ul className="items">
    <li id="homelink" className='links'> <a href="/" id="navhome"> Home </a></li> 
    <li id="productlink" className='links'><a href="/add" id="navadd">AddProduct </a></li> 
    <li id="editlink" className='links'><a href="/inventory" id="navedit"> Inventory </a></li>
    <li id="link1" className='links'><a href="/login" id="navlogin"> Login </a></li>
    <li id="link2" className='links'><a href="/register" id="navregister"> Register </a></li> 
    </ul>
    </div>
  )
}

export default Navbaar ;
//navbaar ,homelink,productlink,editlink,link1,link2,links,navhome,navadd,navedit,navlogin,navregister