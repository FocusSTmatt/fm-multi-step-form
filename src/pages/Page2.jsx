import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Page2(event){

    console.log(event);
    return (
        <>
        <h1>Page2</h1>
        <div className='form-ctn'>
          <form>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address
              and phone number.
            </p>
            <label>Name</label>
            <input type="text"/>
            <label>Email Address</label>
            <input type="email"/>
            <label>Phone Number</label>
            <input type="number"/>
            <Link to="/page3">
              <input className="next-step" type="submit" value="Next Step" />
            </Link>
            <Link to="/">Go Back</Link>
          </form>
        </div>
        </>
      )
}

export default Page2