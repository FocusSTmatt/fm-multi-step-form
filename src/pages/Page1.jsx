import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/page1.css'
import { useRecoilState } from 'recoil';
import { setNameEmailPhoneNumber } from '../atoms';
import { useForm } from "react-hook-form";


function Home() {
  let nav = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [formHold, setFormHold] = useState({name: null, email: null, phoneNumber: null})
  const [formData, setFormData] = useRecoilState(setNameEmailPhoneNumber)
  function handleNameChange(e){
    //  myContext.setName({name: e.target.value});
  // setFormHold({...formHold, name: e.target.value});
  // console.log(formHold.name);
}

 function handleEmailChange(e){
  // myContext.setEmail({email: e.target.value});
  // setFormHold({...formHold, email: e.target.value});
}

function handlePhoneNumberChange(e){
  //  myContext.setPhoneNumber({phoneNumber: e.target.value});
  // setFormHold({...formHold, phoneNumber: e.target.value});
}

const onSubmit = data => {
  console.log(data)
  nav("/page2")
};

 return (
    <>
    <div className='form-ctn'>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="personal-info-title">Personal Info</h2>
        <p id="info-description" className='personal-info-description'>Please provide your name, email address
          and phone number.
        </p>
        <div className='input-ctn'>
          <label>Name</label>
          <input 
            {...register("Name", { required: true })}
            type="text" 
            style={errors.Name ? {borderColor: "hsl(354, 84%, 57%)"} : {borderColor: "hsl(240, 10%, 92%)"}} 
            onChange={handleNameChange} 
            placeholder='e.g. Stephen King' 
          />
          {errors.Name?.type === 'required' && <p className='error1' role="alert">Valid name is required</p>}
        </div>
        <div className='input-ctn'>
          <label>Email Address</label>
          <input
            {...register("mail", { required: "Email Address is required" })} 
            type="email"
            style={errors.mail ? {borderColor: "hsl(354, 84%, 57%)"} : {borderColor: "hsl(240, 10%, 92%)"}} 
            onChange={handleEmailChange} 
            placeholder='e.g. stephenking@lorem.com' 
          />
          {errors.mail?.type === 'required' && <p className='error2' role="alert">Valid email is required</p>}
        </div>
        <div className='input-ctn'>
          <label>Phone Number</label>
          <input 
            {...register("PhoneNumber", {required: "Telephone number is required" })} 
            type="telephone"
            minLength={10}
            style={errors.PhoneNumber ? {borderColor: "hsl(354, 84%, 57%)"} : {borderColor: "hsl(240, 10%, 92%)"}} 
            onChange={handlePhoneNumberChange} 
            placeholder='e.g. +1 253 567 890' 
            />
            {errors.PhoneNumber?.type === 'required' && <p className='error3' role="alert">Valid phone number is required</p>}
        </div>
      </form>
    </div>
    <div id="name-btn" className='btn-ctn'>
          {/* <Link type="submit" to="">
            <button href="/page4" form="form" className="next-btn" type="submit" onClick={() => {
              console.log(formData)
            }}>Next Step</button>
          </Link> */}

          {/* <Link type="submit" to={formData.email != null ? "/page2" : ""}>
            <button href="/page4" form="form" className="next-btn" type="submit" onClick={() => {
              console.log(formData)
            }}>Next Step</button>
          </Link> */}

          <input className='info-submit-btn' form="form" type="submit" href="/page2" value="Next Step" />
        </div>
    </>
  )
}

export default Home

