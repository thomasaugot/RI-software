import React from 'react'
import './NavBarItem.scss'
import {FiChevronRight} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { NavItemProps } from '../../../types/types'

function NavBarItem({index, text,icon, menuItems}: NavItemProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const onOpen =() => {
        if(index){
            setIsOpen(!isOpen)
        }
    }
  return (
    <div onClick={onOpen} className={isOpen ? 'navitem-expand':'navitem'}>
        <div className='nav-item-top'>
            <div className='nav-item-top-text'>
                <span className='icon'>{icon}</span>
                <p>{text}</p>
            </div>
            <FiChevronRight className={isOpen? 'rotate': 'rotate-0'}/>
        </div>
        <div className={isOpen ? 'nav-item-menu': 'hide'}>
           {menuItems?.map((item, i)=>(
            <Link className='nav-menu-link' onClick={()=>setIsOpen(false)} to={""} key={i}>
                <span>{item.icon}</span>
                <p>{item.name}</p>
            </Link>
           ))}
        </div>
    </div>
  )
}

export default NavBarItem
