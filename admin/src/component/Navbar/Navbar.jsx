import Reassct from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (  
    <div className='navbar'>
      <div className="admin-logo">
        <img src={assets.logo} className='logo' alt="food up" />
        <p>Admin Panel</p>
      </div>
        <img src={assets.profile_image} alt="profile" className='profile' />
    </div>
  )
}

export default Navbar