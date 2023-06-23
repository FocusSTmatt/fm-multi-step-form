import { Link } from "react-router-dom"

function Button() {
  return (
    <div className='btn-ctn'>
          <Link 
            to="/page4"
            className="next-btn" 
            type="submit" 
          > Next Step
          </Link>
          <Link to="/page2"
            >Go Back
          </Link>
        </div>
  )
}

export default Button