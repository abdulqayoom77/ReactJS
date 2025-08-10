import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <h1>Footer React</h1>
        <div className='social-links'>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
            <a href="">LinkedIn</a> 
        </div>
        <p id='copyright'>© 2023 Your Company Name. All rights reserved.</p>
        <p id='policy'>Privacy Policy | Terms of Service</p>
        <p id='contact'>Contact us at:</p>
    </div>
  )
}

export default Footer