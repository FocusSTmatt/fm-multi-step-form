import { NavLink } from 'react-router-dom';
import "../styles/navbar.css"

const NavBar = () => {
  return (
    <nav>
      
      <div className='top-bar'>
        <NavLink
          to="/"
          className="number-outline"
          style={({ isActive }) => {
            return {
              background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
              color: isActive ? "hsl(213, 96%, 18%)" : "",
            };
          }}
        >1
        </NavLink>

        <NavLink
          to="/page2"
          className="number-outline"
          style={({ isActive }) => {
            return {
              background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
              color: isActive ? "hsl(213, 96%, 18%)" : "",
            };
          }}
        >2
        </NavLink>

        <NavLink
          to="/page3"
          className="number-outline"
          style={({ isActive }) => {
            return {
              background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
              color: isActive ? "hsl(213, 96%, 18%)" : "",
            };
          }}
        >3
        </NavLink>

        <NavLink
          to="/page4"
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

        <div id="side-bar" className='side-bar'>
          <div className='side-bar-items'>
            <NavLink
              to="/"
              className="number-outline"
              style={({ isActive }) => {
                return {
                  background: isActive ? 'hsl(206, 94%, 87%)' : "transparent",
                  color: isActive ? "hsl(213, 96%, 18%)" : "",
                };
              }}
            >1
            </NavLink>
            <div className='side-bar-text'>
              <p>STEP 1</p>
              <p>YOUR INFO</p>
            </div>
          </div>

          <div className='side-bar-items'>
            <NavLink
              to="/page2"
              className="number-outline"
              style={({ isActive }) => {
                return {
                  background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
                  color: isActive ? "hsl(213, 96%, 18%)" : "",
                };
              }}
            >2
            </NavLink>
            <div className='side-bar-text'>
              <p>STEP 2</p>
              <p>SELECT PLAN</p>
            </div>
          </div>

          <div className='side-bar-items'>
            <NavLink
              to="/page3"
              className="number-outline"
              style={({ isActive }) => {
                return {
                  background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
                  color: isActive ? "hsl(213, 96%, 18%)" : "",
                };
              }}
            >3
            </NavLink>
            <div className='side-bar-text'>
              <p>STEP 3</p>
              <p>ADD-ONS</p>
            </div>
          </div>

          <div className='side-bar-items'>
            <NavLink
              to="/page4"
              className="number-outline"
              style={({ isActive }) => {
                return {
                  background: isActive ? "hsl(206, 94%, 87%)" : "transparent",
                  color: isActive ? "hsl(213, 96%, 18%)" : "",
                };
              }}
            >4
            </NavLink>
            <div className='side-bar-text'>
              <p>STEP 4</p>
              <p>SUMMARY</p>
            </div>
          </div>

        </div>
    </nav>
  )
}

export default NavBar
