import React,{useState} from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route,Routes  } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './component/Footer/Footer'
import LoginPopUp from './component/LoginPopUp/LoginPopUp'
import Verify from './Pages/Verify/Verify'
import MyOrder from './Pages/MyOrder/MyOrder'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (  
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
          <Route path='/verify' element={<Verify/>} />
          <Route path='/myorders' element={<MyOrder/>}  />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App