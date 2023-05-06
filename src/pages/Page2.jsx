import "../styles/page2.css"
import { Link } from "react-router-dom";
import arcadeIcon from "../assets/images/icon-arcade.svg"
import advancedIcon from "../assets/images/icon-advanced.svg"
import proIcon from "../assets/images/icon-pro.svg"

function Page2(){

    
    return (
        <>
        <div className='form-ctn'>
          <form>
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing.</p>

            <div className='plan-ctn'>
              <img src={arcadeIcon} alt="joy stick icon"/>
              <div className="plan-text">
                <h4>Arcade</h4>
                <p>$90/yr</p>
                <p>2 months free</p>
              </div>
            </div>

            <div className='plan-ctn'>
              <img src={advancedIcon} alt="joy stick icon"/>
              <div className="plan-text">
                <h4>Arcade</h4>
                <p>$90/yr</p>
                <p>2 months free</p>
              </div>
            </div>

            <div className='plan-ctn'>
              <img src={proIcon} alt="joy stick icon"/>
              <div className="plan-text">
                <h4>Arcade</h4>
                <p>$90/yr</p>
                <p>2 months free</p>
              </div>
            </div>
            
            </form>
        </div>

        <div className='btn-ctn'>
            <Link to="/page3">
              <input className="next-btn" type="submit" value="Next Step" />
            </Link>
            <Link to="/">Go Back</Link>
            </div>         
        </>
      )
}

export default Page2