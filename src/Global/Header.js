import React, { useState } from 'react'
import logo from '../logo.svg';

function toggleMenu(toggle) {
    toggle.className.toggle("change")
}

const MenuIcon = () => {
    return (
        <div 
        className="header-menu-icon"
        id="Icon" 
        >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

const Header = () => {
  return (
    <div className="App">
      <header className="header">
        <ul 
        style={{ display: 'flex', flexDirection: 'row'}}
        className="header-left-menu">
           <MenuIcon />
            <img src={logo} className="header-logo" alt="logo" />
         </ul>
         <ul className="header-right-menu">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Buy</li>
         </ul> 
      </header>
    </div>
  )
}

export default Header
