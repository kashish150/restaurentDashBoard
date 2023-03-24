import React from 'react' ;
import DropDown from './Dropdown';
import Card from './Card';
import Orderdetail from "./Orderdetail";
const Overview = () => {
  return (
    <div className='overview'>
      <span> <h2> Welcome Back La-Pinoz-Pizza </h2> </span>
      <hr></hr>
      <div className='left_align'>
      <h2 className='orderhead'> <b> <i>New Orders</i></b></h2> <br></br>
      <Card/>
      </div>
      <div className='dropdownc'>
      <DropDown/>
      </div>
    
    </div>
  )
}

export default Overview ;
