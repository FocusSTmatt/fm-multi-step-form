import { Link } from "react-router-dom";


function Page4(){
  return (
        <>
        <h1></h1>
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
            <Link to="/page4">
              <input className="next-step" type="submit" value="Confirm" />
            </Link>
            <Link to="/page3">Go Back</Link>
          </form>
        </div>
        </>
      )
}

export default Page4