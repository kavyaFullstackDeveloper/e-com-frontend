import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import insta_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whats_app_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>CARTLY</p>
       </div>
       <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
       <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={insta_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whats_app_icon} alt="" />
        </div>
       </div>
       <div className="footer-copy-right">
        <hr />
        <p>Copyright @ 2023 -All rights are reserved</p>
       </div>
    </div>
  )
}

export default Footer