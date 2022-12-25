import React from 'react'
import { Link,NavLink } from "react-router-dom";





const NavsBar = () => {
  return (
    <>
      <nav  className='nav1'     
      //  style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
      <hr />
    </>
  )
}

export default NavsBar