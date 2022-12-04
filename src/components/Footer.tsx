import React from 'react'
import logo from "../Assets/Group 280.png"

export const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <p>Terms of Service | Sales Agreement | Privacy Policy</p>
        <img src={logo} alt="" />
        <p>&copy; 2022 OSDF All rights reserved</p>
      </div>
    </footer>
  )
}
