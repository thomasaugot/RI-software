import { useState, useEffect } from "react";
import "./NavBar.scss";
import {
  navlogo,
  Logout,
} from "../../assets/Icons";
import NavBarItem from "./NavBarItem/NavBarItem";
import { navbar } from "../../queries/navbarQueries";
import { navbarProps } from "../../types/navbarTypes";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const [navData, setNavData] = useState<Array<navbarProps>>([]);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const navigate = useNavigate();

  const companyAvatar = localStorage.getItem("company_avatar")
  const companyName = localStorage.getItem("company_name")
  const employeeId = parseInt(localStorage.getItem("employee_id") || '-1')
  

  useEffect(() => {
    const getNavData = async () => {
      const datas = await navbar(employeeId);
      if(datas){
        setNavData(datas);
      }else{
        navigate('/login');
      }
    };
    getNavData();
  }, []);
  
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-header">
          <span className="navnar-company-avatar-container">{companyAvatar && companyAvatar != 'null' ? <img src={companyAvatar} /> : navlogo}</span>
          <p className="navbar-head-text">{companyName}</p>
        </div>
        <div className="navbar-container">
          {navData.map((item, i) => (
            <NavBarItem
              key={i}
              text={item.name}
              url={item.url}
              menuItems={item.subitems}
              index={i + 1}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </div>
      </div>
      <div className="navbar-bottom" onClick={()=>{
        localStorage.setItem("token", '')
        navigate('/login');
      }}>
        <div className="logout-button">
          <span>{Logout}</span>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
