import React from 'react'
import './NavBar.scss'
import { navlogo, Logout } from '../../assets/Icons'
import NavBarItem from './NavBarItem/NavBarItem'
import { navbarProps } from '../../types'
import { navbars } from '../../queries'


function NavBar() {
  const [navData, setNavData] = React.useState<Array<navbarProps>>([])

  
  React.useEffect(()=>{
    const getNavData = async () => {
     const datas =  await navbars(1)
     setNavData(datas)
    }
    getNavData()
  },[])
  
  console.log(navData)
  return (
    <div className='navbar'>
        <div className="navbar-header">
            <span>{navlogo}</span>
            <p className='navbar-head-text'>Store Panel</p>
        </div>
      <div className="navbar-container">
        {navData.map((item, i)=>(
            <NavBarItem key={i} text={item.name} menuItems={item.subitems} index={i+1}/>
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

