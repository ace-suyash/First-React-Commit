import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>   
        <h2>Aurora.com</h2>

        <div>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Product'>Product</Link>
        </div>

    </div>
  )
}

export default Navbar
