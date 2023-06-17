import "../styles/page2.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { PlanData } from "../data/PlanData"
import Switch from "react-switch";
import { setPlan, toggleSwitch, selectedActivePlan } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";


function Page2(){
  const [isActive, setIsActive] = useState({isActive: null})
  const [selectedPlan, setSelectedPlan] = useRecoilState(setPlan)
  const [isSwitchToggled, setSwitchToggled] = useRecoilState(toggleSwitch)
  const [activePlan, setActivePlan] = useRecoilState(selectedActivePlan)
  
  function handlePlanSelect(e, index){
    toggleActive(index)
   if(e.target.id === "0" && isSwitchToggled){
    setSelectedPlan({name: "Arcade", terms: "yr", price: "90" })
  } else if(e.target.id === "0" && !isSwitchToggled) {
     setSelectedPlan({name: "Arcade", terms: "mo", price: "9" })
   } else if(e.target.id === "1" && isSwitchToggled) {
    setSelectedPlan({name: "Advanced", terms: "yr", price: "120" })
  } else if(e.target.id === "1" && !isSwitchToggled) {
    setSelectedPlan({name: "Advanced", terms: "mo", price: "12" })
  } else if(e.target.id === "2" && isSwitchToggled) {
    setSelectedPlan({name: "Pro", terms: "yr", price: "90" })
  } else if(e.target.id === "2" && !isSwitchToggled) {
    setSelectedPlan({name: "Pro", terms: "mo", price: "15" })
  }
  }
  
  function toggleActive(index){
    // setIsActive({ ...isActive, activeObject: PlanData[index]});
    setActivePlan({ ...activePlan, activeObject: PlanData[index]});
    // console.log(isActive.activeObject)
    console.log(activePlan)
   
  }

  function toggleActiveClass(index){
    // if(PlanData[index] === isActive.activeObject){
    //   return "plan-ctn-selected"
    // } else {
    //   return "plan-ctn"
    // }

    if(PlanData[index] === activePlan.activeObject){
      return "plan-ctn-selected"
    } else {
      return "plan-ctn"
    }
  }
  
  function handleClick(id){
    console.log(isActive.activeObject)
    // if(isActive.activeObject.isActive != null){
    //   setSwitchToggled(!isSwitchToggled)
    // }
    // console.log(isSwitchToggled)
    }
  

   function handleChange() {
    setSwitchToggled(!isSwitchToggled)
    console.log(isSwitchToggled)
  }
    
  return (
        <>
        <div className='form-ctn'>
          {/* <button>TEST CHECKED</button> */}
          <form>
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing.</p>
            {PlanData.map((item, index) => {
              return (
                  <div
                    className={toggleActiveClass(index)} 
                    id={index}
                    key={index} 
                    onClick={(e) => handlePlanSelect(e, index)}
                  >
                    <img src={item.icon} alt={item.alt}/>
                    <div className="plan-text">
                      <h4>{item.name}</h4>
                      <p 
                        className="plan-price">{
                          isSwitchToggled ? 
                          `${item.dollarsPerYear}/yr` : 
                          `${item.dollarsPerMonths}/mo`
                          }
                      </p>
                      {isSwitchToggled && <p>2 months free</p>}
                    </div>
                  </div>
            )})}
            <div className="switch-ctn">
            <span className={isSwitchToggled ? "unchecked" : "checked"}>Monthly</span>
            <Switch 
                className="switch"
                onChange={handleChange} 
                checked={isSwitchToggled}
                uncheckedIcon={false} 
                checkedIcon={false} 
                height={20}
                width={35}
                handleDiameter={10}
                offColor='#02295a'
                onColor='#02295a'
            />
            <span className={isSwitchToggled ? "checked" : "unchecked"}>Yearly</span>
          </div>
          <div className='btn-ctn'>
            <Link to={activePlan.activeObject ? "/page3" : "" }>
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
          </form>
        </div> 
        </>
      )
}

export default Page2