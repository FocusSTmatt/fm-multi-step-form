import React from 'react'
import Switch from "react-switch";


const ReactSwitch = () => {
    
    function SwitchExample(){
    
        const [checked, setChecked] = useState(false) 
    
      handleChange(checked) {
        setChecked(!checked)
      }
    
      
        return (
          <label>
            <span>Switch with default style</span>
            <Switch onChange={this.handleChange} checked={this.state.checked} />
          </label>
        );
      }
    }


export default ReactSwitch
