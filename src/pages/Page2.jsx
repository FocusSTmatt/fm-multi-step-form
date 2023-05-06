import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Page2(){

    
    return (
        <>
        <h3>Select Your Plan</h3>
        <div className='form-ctn'>
          <form>
            <h1>Personal Info</h1>
            <p>You have the option of monthly or yearly billing.
            </p>
            <label>Name</label>
            <input type="text"/>
            <label>Email Address</label>
            <input type="email"/>
            <label>Phone Number</label>
            <input type="number"/>
            <div className='btn-ctn'>
            <Link to="/page3">
              <input className="next-btn" type="submit" value="Next Step" />
            </Link>
            <Link to="/">Go Back</Link>
            </div>         
            </form>
        </div>
        </>
      )
}

export default Page2