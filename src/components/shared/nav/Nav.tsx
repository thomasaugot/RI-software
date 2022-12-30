import { FC } from "react";
import storehouse from "./icons/store-icon.svg";
import { people, organize, settings, product } from "./icons";
import logout from "./icons/logout-icon.svg";
import "./Nav.scss";
import NavItem from "./NavItem";

interface NavProps {
  heading: string;
}

const navItems: Array<{ item: string; route: string; icon: JSX.Element }> = [
  {
    item: "People",
    route: "",
    icon: people,
  },
  {
    item: "Organize",
    route: "",
    icon: organize,
  },
  {
    item: "Setting",
    route: "",
    icon: settings,
  },
  {
    item: "Products",
    route: "",
    icon: product,
  },
];

const Nav: FC<NavProps> = ({ heading }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-main">
        <div className="sidebar-header">
          <div className="siderbar-logo-contain">
            <img src={storehouse} alt="store" />
          </div>
          <p className="sidebar-title">{heading}</p>
        </div>
        <div className="sidebar-container">
          {navItems.map(({item, icon}, i)=>(
            <NavItem item={item} icon={icon} key={i} index={i}/>
          ))}
        </div>
      </div>
      <div className="logout">
        <div className="logout-icon">
          <img src={logout} alt="logout" />
        </div>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Nav;
