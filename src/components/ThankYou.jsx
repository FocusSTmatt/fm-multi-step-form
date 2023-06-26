import '../styles/thankyou.css'
import iconCheckmark from '../assets/images/icon-thank-you.svg'


function ThankYou() {
  return (
    <div className='ThankYou'>
        <img className="icon-checkmark" src={iconCheckmark} />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription!
            We hope you have fun using our platform.
            If you ever need support, please feel free
            to email us at support@loregaming.com.
        </p>
    </div>
  )
}

export default ThankYou