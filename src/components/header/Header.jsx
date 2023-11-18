import React, { useState } from 'react'
import './header.css'

function Header() {
  const [toggle, setToggel]= useState(false);
  return (
    <header className="header">
      <nav className='nav container'>
        <a href="index.html" className='nav_logo'>
          Pratham
        </a>
        <div className={toggle?"nav-menu show-menu":"nav-menu"}>
          <ul className='nav_list grid'>
            <li className='nav_item'>
              <a href="#home" className='nav_link'>
            <i className='uil uil-estate nav_icon'></i>Home
              </a>
            </li>
            <li className='nav_item'>
              <a href="#about" className='nav_link'>
            <i className='uil uil-user nav_icon'></i>About
              </a>
            </li>
            <li className='nav_item'>
              <a href="#skills" className='nav_link'>
            <i className='uil uil-file-alt nav_icon'></i>Skill
              </a>
            </li>
            <li className='nav_item'>
              <a href="#services" className='nav_link'>
            <i className='uil uil-briefcase-alt nav_icon'></i>Services
              </a>
            </li>
            <li className='nav_item'>
              <a href="#portfolio" className='nav_link'>
            <i className='uil uil-scenery nav_icon'></i>Portfolio
              </a>
            </li>
            <li className='nav_item'>
              <a href="#contact" className='nav_link'>
            <i className='uil uil-message scenery nav_icon'></i>Connect
              </a>
            </li>
          </ul>
          <i className='uil uil-times nav_close' onClick={()=>setToggel(!toggle)}></i>
        </div>
        <div className="nav_toggle" onClick={()=>setToggel(!toggle)}>
          <i className='uil uil-apps'></i>

        </div>
      </nav>
    </header>
  )
}

export default Header