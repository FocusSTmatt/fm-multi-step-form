import React from 'react'
import "../styles/page1.css"
import { Link } from 'react-router-dom'


function Home(event) {
  console.log(event.target)
  
  return (
    <>
    <h1>Page 1</h1>
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
        <Link to="/page2">
          <input className="next-step" type="submit" value="Next Step" />
        </Link>
      </form>
    </div>
    </>
  )
}

export default Home

