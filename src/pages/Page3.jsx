import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/page3.css"
import Checkbox from "@material-ui/core/Checkbox";

function Page3(){
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
        setChecked(event.target.checked) 
  };


  return (
    <>
    <div className='form-ctn'>
      <form>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className="addOn-item-ctn ">
          <Checkbox 
              color="primary"
              checked={checked} 
              onChange={handleChange}
              inputProps={{'aria-label': 'Online Services'}} 
              sx={{
                  borderRadius: 5,
                }}
              />
          <div className='addOn-text'>
            <h4>Online Services</h4>
            <p className="addOn-description">Acces to multiplayer games</p>
          </div>
          <p className="addOn-price">+10/mo</p>
        </div>
        
        <div className="addOn-item-ctn ">
          <Checkbox 
              color="primary"
              checked={checked} 
              onChange={handleChange}
              inputProps={{'aria-label': 'Online Services'}} 
              sx={{
                  borderRadius: 5,
                }}
              />
          <div className='addOn-text'>
            <h4>Larger storage</h4>
            <p className="addOn-description">Extra 1TB of cloud storage</p>
          </div>
          <p className="addOn-price">+10/mo</p>
        </div>

        <div className="addOn-item-ctn ">
          <Checkbox 
              color="primary"
              checked={checked} 
              onChange={handleChange}
              inputProps={{'aria-label': 'Online Services'}} 
              sx={{
                  borderRadius: 5,
                }}
              />
          <div className='addOn-text'>
            <h4>Online Services</h4>
            <p className="addOn-description">Acces to multiplayer games</p>
          </div>
          <p className="addOn-price">+10/mo</p>
        </div>


      </form>
    </div>

    {/* <div className='btn-ctn'>
        <Link to="/page3">
          <input className="next-btn" type="submit" value="Next Step" />
        </Link>
        <Link to="/">Go Back</Link>
    </div>          */}
    </>
  )
}

export default Page3