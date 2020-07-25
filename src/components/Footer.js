import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import ios from '../img/ios.webp'
import android from '../img/android.webp'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h4>We're Fresh Cook</h4>
                        <ul>
                            <li><a to='/'>About Us</a></li>
                            <li><a to='/'>Team</a></li>
                            <li><a to='/'>Careers</a></li>
                            <li><a to='/'>Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h4>Legal</h4>
                        <ul>
                            <li><a to='/'>Terms & Conditions</a></li>
                            <li><a to='/'>Refund & Cancellation</a></li>
                            <li><a to='/'>Privacy Policy</a></li>
                            <li><a to='/'>Offer Terms</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h4>Reach to us</h4>
                        <ul>
                            <li><a to='/'>Mob: +977 123123321</a></li>
                            <li><a to='/'>Add: kathmandu, Nepal</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                    <h4>Download</h4>
                        <ul>
                            <li><a to='/'><img src={ios} /></a></li>
                            <li><a to='/'><img src={android} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
