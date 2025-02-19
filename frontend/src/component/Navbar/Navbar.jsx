import React,{useState,useContext} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext.jsx'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home")
  const {getTotalCartAmount,cartItems,token,setToken} = useContext(StoreContext)
  const totalSelectedItems = Object.keys(cartItems).filter(key => cartItems[key] !== 0).length
  const navigate = useNavigate()
  
  const logout = () =>{
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  const orders = () =>{
    navigate("/myorders")
  }

  return (
    <div className="navbar">
     <Link to='/'><img src={assets.logo} alt="Logo" className='logo' /> </Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
          <a href='#explore-menu' onClick={()=> setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
          <a href='#app-download' onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
          <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="search" />
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /> </Link>
            { totalSelectedItems > 0 && <div className='dot'>{ totalSelectedItems }</div> }
          </div>
          {!token ? <button onClick={()=> setShowLogin(true) }>sign in</button>
          : <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="profile" />
              <ul className="nav-profile-dropdown">
                <li onClick={orders}><img src={assets.bag_icon} alt=""  /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
          </div> }
        </div>
    </div>
  )
}

export default Navbar