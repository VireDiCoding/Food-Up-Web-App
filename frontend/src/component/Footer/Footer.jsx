import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left all-footer">
                <img src={assets.logo} alt='logo' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At sunt quod pariatur tempore ipsum. Ratione commodi impedit nostrum optio, dignissimos sint consectetur unde laborum laboriosam odio molestiae ea molestias minima quo, velit vitae nulla repudiandae, voluptas id aut quos quis necessitatibus obcaecati numquam. Labore, beatae.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center all-footer">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right all-footer">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@FoodUp.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 &copy; FoodUp.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer;