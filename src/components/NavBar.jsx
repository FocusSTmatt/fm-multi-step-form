import React from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css"

const NavBar = () => {
  return (
    <nav>
      <div className='top-bar'>
        <NavLink to="/"
                className="number-outline"
                style={({ isActive }) => {
                    return {
                      background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
                      color: isActive ? "hsl(213, 96%, 18%)" : "",
                    };
                  }}
                >1
        </NavLink>

        <NavLink to="/page2"
                  className="number-outline"
                  style={({ isActive }) => {
                    return {
                      background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
                      color: isActive ? "hsl(213, 96%, 18%)" : "",
                    };
                  }}
                >2
        </NavLink>

        <NavLink to="/page3"
                  className="number-outline"
                  style={({ isActive }) => {
                    return {
                      background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
                      color: isActive ? "hsl(213, 96%, 18%)" : "",
                    };
                  }}
                >3
        </NavLink>

        <NavLink to="/page4"
                  className="number-outline"
                  style={({ isActive }) => {
                    return {
                      background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
                      color: isActive ? "hsl(213, 96%, 18%)" : "",
                    };
                  }}
                >4
        </NavLink>
      </div> 

      <div className='side-bar'>
        <NavLink to="/"
                style={({ isActive }) => {
                    return {
                      background: isActive ? 'hsl(206, 94%, 87%)' : "transparent",
                      color: isActive ? "hsl(213, 96%, 18%)" : "",
                    };
                  }}
                >1
        </NavLink>

        <NavLink to="/page2"
                  style={({ isActive }) => {
                    return {
                      background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
                      color: isActive ? "hsl(213, 96%, 18%)" : "",
                    };
                  }}
                >2
        </NavLink>

        <NavLink to="/page3"
                  style={({ isActive }) => {
                    return {
                      background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
                      color: isActive ? "hsl(213, 96%, 18%)" : "",
                    };
                  }}
                >3
        </NavLink>

        <NavLink to="/page4"
                  style={({ isActive }) => {
                    return {
                      background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
                      color: isActive ? "hsl(213, 96%, 18%)" : "",
                    };
                  }}
                >4
        </NavLink>
      </div>            
    </nav>
  )
}

export default NavBar
