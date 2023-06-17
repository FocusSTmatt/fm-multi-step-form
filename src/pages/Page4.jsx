import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { AddonAtom, CustomizableProfile, LargerStorage, OnlineServices, setPlan, toggleSwitch } from "../atoms";
import "../styles/page4.css"



function Page4() {
  const addonCheck = useRecoilValue(AddonAtom)
  const planCart = useRecoilValue(setPlan);
  const isSwitched = useRecoilValue(toggleSwitch);
  const onlineServicesCart = useRecoilValue(OnlineServices);
  const largerStorageCart = useRecoilValue(LargerStorage);
  const customizableProfile = useRecoilValue(CustomizableProfile);

  function handleClick() {
    console.log(addonCheck)
  }

  function setPlanName(){

  }

  return (
    <>
      <div className='cart-ctn'>
        <h1>Finishing Up</h1>
        <h5>Add-ons help enhance your gamine experience</h5>
        <div className="cart">
          <div className="cart-item">
            <div className="plan-name-change-ctn">
            <p className="item-name">{planCart.name}</p>
            <p>Change</p>
            </div>
            <p className="item-price">${planCart.price}/{planCart.terms}</p>
          </div>

          {addonCheck[0] && <div className="cart-item">
            <p className="item-name">Online service</p>
            <p className="item-price">{isSwitched ? "$10" : "$1"}/{planCart.terms}</p>
          </div>}

          {addonCheck[1] && <div className="cart-item">
            <p className="item-name">Larger storage</p>
            <p className="item-price">$90/{planCart.terms}</p>
          </div>}

          {addonCheck[2] && <div className="cart-item">
            <p className="item-name">Customizable profile</p>
            <p className="item-price">$90/{planCart.terms}</p>
          </div>}
        </div>
        <div className='btn-ctn'>
          <button onClick={handleClick}>Test</button>
          <Link to="/page3">
            <input
              className="next-btn"
              type="submit"
              value="Confirm"
            />
          </Link>
          <Link to="/page3"
          >Go Back
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page4