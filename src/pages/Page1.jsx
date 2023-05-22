import { Link } from 'react-router-dom'
import '../styles/page1.css'
import { useRecoilState } from 'recoil';
import { setNameEmailPhoneNumber } from '../atoms';


function Home() {
  const [formData, setFormData] = useRecoilState(setNameEmailPhoneNumber)
 function handleNameChange(e){
  //  myContext.setName({name: e.target.value});
  setFormData({name: e.target.value});
 }

 function handleEmailChange(e){
  // myContext.setEmail({email: e.target.value});
  setFormData({email: e.target.value});
}

function handlePhoneNumberChange(e){
  //  myContext.setPhoneNumber({phoneNumber: e.target.value});
  setFormData({phoneNumber: e.target.value});
 }
 
 const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData.name)
  console.log(formData.email)
  
}
 
 return (
    <>
    <div className='form-ctn'>
      <form id="form" onSubmit={() => handleSubmit}>
        <h2>Personal Info</h2>
        <p>Please provide your name, email address
          and phone number.
        </p>
        <div className='input-ctn'>
          <label>Name</label>
          <input type="text" onChange={handleNameChange} placeholder='e.g. Stephen King' required/>
        </div>
        <div className='input-ctn'>
          <label>Email Address</label>
          <input type="email"onChange={handleEmailChange} placeholder='e.g. stephenking@lorem.com' required/>
        </div>
        <div className='input-ctn'>
          <label>Phone Number</label>
          <input type="number" onChange={handlePhoneNumberChange} placeholder='e.g. +1 253 567 890' required/>
        </div>
      </form>
    </div>
    <div className='btn-ctn'>
        <Link to="/page2">
          <button form="form" className="next-btn" type="submit" onClick={() => {
            console.log(formData)
          }}>Next Step</button>
        </Link>
        <Link></Link>
        </div>
        <button onClick={handleSubmit}>Test</button>
    </>
  )
}

export default Home

