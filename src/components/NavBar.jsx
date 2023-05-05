import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>

    <div>
      <NavLink to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}>1</NavLink>
      <NavLink to="page1"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}>2</NavLink>
      <NavLink to="page2"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}>3</NavLink>
      <NavLink to="page3"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}>4</NavLink>
    </div>



{/* <NavLink
  to="/page2"
  style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
    };
  }}
>
  Page 2
</NavLink> */}

  
      
    </>
  )
}

export default NavBar
