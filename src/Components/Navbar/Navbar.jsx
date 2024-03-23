import React from 'react'
import './Navbar.css'
import logo from '../Assets/blifelogo 1.png'
import cart_icon from '../Assets/shopping-bag 1.png'
import user_icon from '../Assets/user 1.png'
import search_icon from '../Assets/search-interface-symbol 1.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    

  return (
    <div className='navbar'>

    <div className='nav-logo'>
        <img src={logo} alt=""  />
       
    </div>

    <ul className="nav-menu">
    <li>Productos</li>
    <li><Link style={{ textDecoration: 'none'}} to='/'>Promociones</Link> </li>
    <li>Nosotros</li>
    </ul>

<div className="nav-login-cart">
    <img src={search_icon} alt="" />
    <img src={user_icon} alt="" />
    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
  <div className="nav-cart-count">0</div>
  
</div>

    </div>
  )
}


export default Navbar