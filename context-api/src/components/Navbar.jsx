import React from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import { useContext } from 'react'
import Nav2 from './Nav2'

const Navbar = () => {
    const [theme] = useContext(ThemeDataContext)

  return (
    <div className={theme}>
        <h2>NOVA</h2>
        <Nav2 />
    </div>
  )
}

export default Navbar
