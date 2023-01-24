import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-right'>
        <div><i class="fa-solid fa-cart-shopping"></i></div>
         <h1>Aroma</h1>
      </div>
      <div className='nav-lists'>
        <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/add"><li>Add</li></NavLink>
            <NavLink to="/blog"><li>Blog</li></NavLink>
            <NavLink to="/pages"><li>Pages</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
        </ul>
      </div>
      <div className='nav-left'>
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-solid fa-cart-shopping"></i>
      <button className='btn-nav'>Buy Now</button>
      </div>
    </div>
  )
}

export default Navbar
