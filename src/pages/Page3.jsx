import { Link } from "react-router-dom";
import "../styles/page3.css"
import { Checkbox } from "@material-ui/core";
import { toggleSwitch, AddonAtom} from "../atoms";
import { useRecoilState, useRecoilValue } from 'recoil'
import {AddOnData} from "../data/AddOnData"


function Page3(){
  const isSwitched = useRecoilValue(toggleSwitch);
  const [addonCheck, setAddonCheck] = useRecoilState(AddonAtom)
  

  
  function handleChecked(event){
      const checkedArray = [...addonCheck];
      checkedArray[event.target.id] = !checkedArray[event.target.id];
      setAddonCheck(checkedArray)
      console.log(addonCheck)
  }
    
  return (
    <>
    <div className='addon-ctn'>
      <h2 className="addon-title">Pick add-ons</h2>
      <p className="addon-description">Add-ons help enhance your gaming experience.</p>
        {AddOnData.map((item, index) => {
            return (
            <div className="addOn-item-ctn" key={index}>
              <Checkbox
                checked={addonCheck[index]}
                onChange={handleChecked}
                id={index.toString()}
                style={{
                  color: "hsl(243, 100%, 62%)",
                  borderRadius: "9px",
                  transform: "scale(1.1)",
                  padding: "0 0 0 0.5em",
                  alignSelf: "center"
                }}
              />
              <div className='addOn-text'>
              <h4>{item.title}</h4>
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
    </div>
    <div 
      className='btn-ctn'
    >
        <Link to="/page4">
          <input 
              className="next-btn"
              id="addon-btn" 
              type="submit" 
              value="Next Step" 
            />
        </Link>
        <Link className="addon-back-btn" to="/page2"
          >Go Back
        </Link>
      </div> 
    </>
  )
}

export default Page3