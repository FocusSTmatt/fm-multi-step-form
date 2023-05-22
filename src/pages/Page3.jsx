import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/page3.css"
import { toggleChecked } from "../atoms";
import Checkbox from "@material-ui/core/Checkbox";
import { useRecoilState, useRecoilValue } from 'recoil'


function Page3(){
  const yearOrMonth = useRecoilValue(toggleChecked)
  const [serviceChecked, setServiceChecked] = useState(false);
  const [storageChecked, setStorageChecked] = useState(false);
  const [profileChecked, setProfileChecked] = useState(false);

  const handleServiceChecked = (event) => {
        setServiceChecked(event.target.checked)
        console.log(serviceChecked) 
  };

  const handleStorageChecked = (event) => {
        setStorageChecked(event.target.checked) 
  };

  const handleProfileChecked = (event) => {
        setProfileChecked(event.target.checked) 
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
              checked={serviceChecked} 
              onChange={handleServiceChecked}
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
              checked={storageChecked} 
              onChange={handleStorageChecked}
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
              checked={profileChecked} 
              onChange={handleProfileChecked}
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
      <button onClick={() => {
      }}></button>
    </div>
    </>
  )
}

export default Page3