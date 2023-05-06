import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileLinks = () => {
  return (
        <>
            <NavLink 
                to="/"
                style={({ isActive }) => {return {color: isActive ? "red" : "black",};}}
            >
            </NavLink>
        </>
  )
}

export default MobileLinks
