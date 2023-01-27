import React from "react";
import "./NavBarItem.scss";
import {
  employee,
  project,
  sale,
  purchase,
  finance,
  hierarchy,
  searchWorker,
  chat,
  pipeline,
  tasks,
  statistic,
  providers,
  order,
  stockLists,
  planningShipments,
  account,
  flowAndFund,
  mutual
} from "../../../assets/Icons";
import { FiChevronRight } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { NavItemProps } from "../../../types/types";

const navIcons = [
    {
        icon: employee, 
        subitemIcons:[
            hierarchy,
            searchWorker,
            chat
        ]
    }, 
    {
        icon: project,
        subitemIcons:[
            pipeline,
            tasks,
            statistic
        ]
    },
    {
        icon: purchase,
        subitemIcons:[
            providers,
            order,
            statistic
        ]
    },
    {
        icon: sale,
        subitemIcons:[
            stockLists,
            planningShipments,
            statistic
        ]
    },
    {
        icon: finance,
        subitemIcons:[
            account,
            flowAndFund,
            mutual,
            statistic
        ]
    }
];

function NavBarItem({ index, text,url, menuItems }: NavItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onOpen = () => {
    if (index) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <NavLink to={url} onClick={onOpen} className={({isActive})=>{
        if(isActive){
            return isOpen ? `navitem-expand`: `navitem`
        } else {
            setIsOpen(false)
            return !isOpen ? `navitem`: `navitem`
        }
    }}>
      <div className="nav-item-top">
        <div className="nav-item-top-text">
          <span className="icons">{navIcons[(index!)-1].icon}</span>
          <p>{text}</p>
        </div>
        <FiChevronRight className={isOpen ? "rotate" : "rotate-0"} />
      </div>
      <div className={isOpen ? "nav-item-menu" : "hide"}>
        {menuItems?.map((item, i) => (
          <Link
            className="nav-menu-link"
            onClick={() => setIsOpen(false)}
            to={item.url!}
            key={i}
          >
            <span>{navIcons[(index!)-1].subitemIcons[i]}</span>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </NavLink>
  );
}

export default NavBarItem;
