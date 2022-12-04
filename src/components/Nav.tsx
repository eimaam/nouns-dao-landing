import React, { useState } from 'react'
import logo from "../Assets/Group 282.png"
import metamask from "../Assets/MetaMask_Fox.png"
import twitter from "../Assets/Path 6.png"


export const Nav = () => {
  const [show, setShow] = useState<boolean>(false)

  const navToggler = () => {
    const logo:any = document.getElementById('logo')
    const menu:any = document.querySelector('ul')
    if(logo.style.display != "block"){
      logo.style.display = "block"
      menu.style.display = "flex"
    }else{
      logo.style.display = "none"
      menu.style.display = "none"
      
    }
  }
  return (
    <nav>
        <h3 id='toggler' onClick={navToggler}>MENU</h3>
        <div>
            <img src={logo} alt="" id='logo'/>
        </div>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <button>Contact us</button>
            <li className='cta'>Signup | Login <img src={metamask} alt="metamask logo" /> <img src={twitter} alt="twitter logo" /> </li>
        </ul>
    </nav>
  )
}
