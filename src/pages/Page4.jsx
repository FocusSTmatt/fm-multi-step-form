import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { AddonAtom, setNameEmailPhoneNumber, setPlan, toggleSwitch } from "../atoms";
import "../styles/page4.css"
import ThankYou from "../components/ThankYou";



function Page4() {
  const addonCheck = useRecoilValue(AddonAtom)
  const planCart = useRecoilValue(setPlan);
  const isSwitched = useRecoilValue(toggleSwitch);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const personalInfo = useRecoilValue(setNameEmailPhoneNumber);
  const [total, setTotal] = useState("")

  useEffect(() => {
    let plan = Number(planCart.price);
    let addon1 = Number(getTheTotal(addonCheck[0], 10, 1))
    let addon2 = Number(getTheTotal(addonCheck[1], 20, 2))
    let addon3 = Number(getTheTotal(addonCheck[2], 30, 3))
    console.log(addon1 + addon2 + addon3 + plan)
    setTotal(addon1 + addon2 + addon3 + plan)
    console.log(total)
  }, [total])
  
  function getTheTotal(arrItem, num1, num2){
    let totalArr = []
      if(arrItem){
        isSwitched ? totalArr.push(+num1) : totalArr.push(+num2)
      } 
      console.log(totalArr)
      return totalArr  
  }
  function handleClick(){
     if(planCart){
      setIsConfirmed(!isConfirmed)
  }
} 

  return (
    <div>
      {!isConfirmed && <div className='cart-ctn'>
        <h1>{personalInfo.email}</h1>
        <h2>Finishing up</h2>
        <h5>Double-check everything looks OK before confirming</h5>
        <div className="cart">
          <div id="plan-cart" className="cart-item">
            <div className="plan-name-change-ctn">
            <p id="plan-name"className="item-name">{planCart.name} ({isSwitched ? "Yearly" : "Monthly"})</p>
            <Link className="change" to="/page2">Change</Link>
            </div>
            <p id="plan-price" className="item-price">${planCart.price}/{isSwitched ? "yr" : "mo"}</p>
          </div>

          <div className="accent-line"></div>
          {addonCheck[0] && <div className="cart-item">
            <p className="item-name">Online service</p>
            <p className="item-price">{isSwitched ? "+$10" : "+$1"}/{isSwitched ? "yr" : "mo"}</p>
          </div>}

          {addonCheck[1] && <div className="cart-item">
            <p className="item-name">Larger storage</p>
            <p className="item-price">{isSwitched ? "+$20" : "+$2"}/{isSwitched ? "yr" : "mo"}</p>
          </div>}

          {addonCheck[2] && <div className="cart-item">
            <p className="item-name">Customizable profile</p>
            <p className="item-price">{isSwitched ? "+$10" : "+$1"}/{isSwitched ? "yr" : "mo"}</p>
          </div>}
        </div>
        <div className="total-ctn">
          <p>Total (per {isSwitched ? "year" : "month"})</p>
          <p className="total-price">+${total}/{isSwitched ? "yr" : "mo"}</p>
        </div>
      </div>}
      {!isConfirmed && <div className='btn-ctn'>
            <input
              id="cart-btn"
              className="next-btn"
              type="submit"
              value="Confirm"
              onClick={handleClick}
            />
          <Link className="cart-go-back-btn"to="/page3"
          >Go Back
          </Link>
        </div>}
        {isConfirmed && <ThankYou />}
    </div>
  )
}

export default Page4