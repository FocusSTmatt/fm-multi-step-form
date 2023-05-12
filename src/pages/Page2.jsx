import "../styles/page2.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { PlanData } from "../data/PlanData"
import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux"
import { setCart } from "../redux/slices/cartSlice"


function Page2(){
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false) 
  const [isActive, setIsActive] = useState({activeObject: null,})

  function toggleActive(index){
    setIsActive({ ...isActive, activeObject: PlanData[index]});
  }
  function toggleActiveClass(index){
    if(PlanData[index] === isActive.activeObject){
      return "plan-ctn-selected"
    } else {
      return "plan-ctn"
    }
  }
  
  // const cart = useSelector((state) => state.getCart.dollarsMonth);
  // const cart1 = useSelector((state) => state.getCart.dollarsYear);
  const getChecked = useSelector((state) => state.isChecked.checked);
  console.log(getChecked)
  // console.log(cart1);
  // console.log(cart);
 
  function handleClick(){
    if(!checked === true){
      console.log(isActive.activeObject.dollarsPerMonths)
      dispatch(setCart(isActive.activeObject.dollarsPerMonths))
    } else {
      console.log(isActive.activeObject.dollarsPerYear)
    }
  }

   function handleChange() {
    setChecked(!checked)
  console.log(getChecked)
  }

  const importedMonthPlanData =  PlanData.map((item, index) => {
    return (
    <div id={index} key={index} className={toggleActiveClass(index)} onClick={() => {toggleActive(index)}}>
      <img src={item.icon} alt={item.alt}/>
      <div className="plan-text">
        <h4>{item.name}</h4>
        <p className="plan-price">${item.dollarsPerMonths}/mo</p>
      </div>
    </div>
  )})

  const importedYearPlanData =  PlanData.map((item, index) => {
    return (
    <div key={index} className={toggleActiveClass(index)} onClick={() => {toggleActive(index)}}>
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
        <button onClick={() => dispatch({checked: true})}>Test</button>
          <Link to="/page3">
            <input 
                onClick={() => {handleClick()}} 
                className="next-btn" 
                type="submit" 
                value="Next Step" 
              />
          </Link>
          <Link to="/"
            >Go Back
          </Link>
        </div> 
        </>
      )
}

export default Page2