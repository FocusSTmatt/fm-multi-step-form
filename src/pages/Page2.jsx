import "../styles/page2.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { PlanData } from "../data/PlanData"
import Switch from "react-switch";


function Page2(event){
  console.log(event.target);

  function handleClick(event){
    console.log(event)
  }

    
    const [checked, setChecked] = useState(false) 

   function handleChange() {
    setChecked(!checked)
    console.log(checked)
    if(checked){

    }
  }

  
  const importedMonthPlanData =  PlanData.map((item, index) => {
    return (
    <div key={index} className='plan-ctn'>
      <img src={item.icon} alt={item.alt}/>
      <div onClick={handleClick} className="plan-text">
        <h4>{item.name}</h4>
        <p className="plan-price">${item.dollarsPerMonths}/mo</p>
      </div>
    </div>
  )})

  const importedYearPlanData =  PlanData.map((item, index) => {
    return (
    <div key={index} className='plan-ctn'>
      <img src={item.icon} alt={item.alt}/>
      <div onClick={handleClick} className="plan-text">
        <h4>{item.name}</h4>
        <p className="plan-price">${item.dollarsPerYear}/yr</p>
        <p>2 months free</p>
      </div>
    </div>
  )})
    
    
  return (
        <>
        <div className='form-ctn'>
          <form>
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing.</p>
            {checked ? importedYearPlanData : importedMonthPlanData}
            <div className="switch-ctn">
            <span className={checked ? "unchecked" : "checked"}>Monthly</span>
            <Switch 
                className="switch"
                onChange={handleChange} 
                checked={checked}
                uncheckedIcon={false} 
                checkedIcon={false} 
                height={20}
                width={35}
                handleDiameter={10}
                offColor='#02295a'
                onColor='#02295a'
            />
            <span className={checked ? "checked" : "unchecked"}>Yearly</span>
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