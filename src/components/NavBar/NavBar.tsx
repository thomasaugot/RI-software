import React from 'react'
import './NavBar.scss'
import { navlogo, people, organize, settings, product, Message, Information, Logout } from '../../assets/Icons'
import NavBarItem from './NavBarItem/NavBarItem'
import { NavItemProps } from '../../types'

const navItems: Array<NavItemProps>=[
    {
      text: "People",
      icon: people,
      menuItems: [
        {
            text: "Message",
            icon: Message,
            url: ""
        },
        {
            text: "Information",
            icon: Information,
            url: ""
        }
      ]
    },
    {
      text: "Organize",
      icon: organize,
    },
    {
      text: "Setting",
      icon: settings,
    },
    {
      text: "Products",
      icon: product,
    },
  ];
function NavBar() {
  return (
    <div className='navbar'>
        <div className="navbar-header">
            <span>{navlogo}</span>
            <p className='navbar-head-text'>Store Panel</p>
        </div>
      <div className="navbar-container">
        {navItems.map((item, i)=>(
            <NavBarItem text={item.text} icon={item.icon} menuItems={item.menuItems} index={i+1}/>
        ))}
      </div>
      <div className="navbar-bottom">
        <div className='logout-button'>
            <span>{Logout}</span>
            <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar

