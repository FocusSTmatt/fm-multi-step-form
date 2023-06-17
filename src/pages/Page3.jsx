import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import "../styles/page3.css"
import { Checkbox } from "@material-ui/core";
import { toggleSwitch, AddonAtom} from "../atoms";
import { useRecoilState, useRecoilValue } from 'recoil'
import {AddOnData} from "../data/AddOnData"


function Page3(){
  const refArray = ["ref1", "ref2", "ref3"]
  const onlineServiceRef = useRef(refArray)
  const isSwitched = useRecoilValue(toggleSwitch);
  const [addonCheck, setAddonCheck] = useRecoilState(AddonAtom)
  

  
  function handleChecked(event, isChecked, value){
      const checkedArray = [...addonCheck];
      checkedArray[event.target.id] = !checkedArray[event.target.id];
      setAddonCheck(checkedArray)
      console.log(addonCheck)
  }
    
   function handleSubmit(e){
     event.preventDefault();
    console.log(e.target.checked);
   }

  return (
    <>
    <div className='form-ctn'>
      <form>
        <button onSubmit={(e) => handleSubmit(e)} type="submit">TEST</button>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
        {AddOnData.map((item, index) => {
            return (
            <div className="addOn-item-ctn" key={index}>
              <div className='addOn-text'>
              <Checkbox
                checked={addonCheck[index]}
                onChange={handleChecked}
                id={index.toString()}
              />
              <h4>{item.name}</h4>
              <p className="addOn-description">{item.description}</p>
            </div>
            <p className="addOn-price">{
                  !isSwitched ? 
                  `+${item.priceMonth}/mo` : 
                  `+${item.priceYear}/yr`
                }
            </p>
          </div>
            )
        })}
        <div className='btn-ctn'>
          <Link 
            to="/page4"
            className="next-btn" 
            type="submit" 
          > Next Step
          </Link>
          <Link to="/page2"
            >Go Back
          </Link>
        </div>
      </form>  
    </div>
    </>
  )
}

export default Page3