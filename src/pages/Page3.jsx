import { Link } from "react-router-dom";
import arcadeIcon from "../assets/images/icon-arcade.svg"
import advancedIcon from "../assets/images/icon-advanced.svg"
import proIcon from "../assets/images/icon-pro.svg"
import { AddOnData } from "../data/AddOnData";

function Page3(){
  const importAddOnData = AddOnData.map((item, index) => {
    return (
      <div key={index} className='addOn-ctn'>
         <input 
            id={item.name}
            name={item.name} 
            type="checkbox"
            value={item.price}
          />
        <div className='addOn-text'>
          <label htmlFor={item.name}>{item.title}</label>
        </div>
          
      </div>
    )
  })


  return (
    <>
    <div className='form-ctn'>
      <form>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
        {importAddOnData}
        
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

export default Page3