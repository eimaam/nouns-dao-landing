import React from 'react'
import logo from "../Assets/Group 282.png"
import metamask from "../Assets/MetaMask_Fox.png"
import twitter from "../Assets/Path 6.png"


export const Nav = () => {
  return (
    <nav>
        <div>
            <img src={logo} alt="" />
        </div>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <button>Contact us</button>
            <li className='button'>Signup | Login <img src={metamask} alt="metamask logo" /> <img src={twitter} alt="twitter logo" /> </li>
        </ul>
    </nav>
  )
}
