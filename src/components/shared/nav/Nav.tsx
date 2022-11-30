import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCogs,
  faHouse,
  faSitemap,
  faUserGroup,
  IconDefinition,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Nav.scss";

interface NavProps {
  heading: string;
}

const navItems: Array<{ item: string; route: string; icon?: IconDefinition }> =
  [
    /*{
      item: "Аналитика данных",
      route: "",
    },
    {
      item: "Сотрудники",
      route: "",
      icon: faUserGroup,
    },
    {
      item: "5 Проекты",
      route: "",
      icon: faShare,
    },
    {
      item: "Закупки",
      route: "",
    },
    {
      item: "Финансы",
      route: "",
    },
    {
      item: "Продажи",
      route: "",
    },
    {
      item: "Склады",
      route: "",
    },
    {
      item: "Анализ конкурентов",
      route: "",
    }*/

    {
      item: "People",
      route: "",
      icon: faUserGroup,
    },
    {
      item: "Organize",
      route: "",
      icon: faSitemap,
    },
    {
      item: "Settings",
      route: "",
      icon: faCogs,
    },
    {
      item: "Products",
      route: "",
      icon: faBox,
    },
  ];

const Nav: FC<NavProps> = ({ heading }) => {
  return (
    <div className="Nav">
      <header>
        <div className="header-icon">
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <h1 className="company-name">{heading}</h1>
      </header>
      <div className="nav-content">
        {navItems.map(({ item, icon }, idx) => (
          <div key={`nav-item-${idx}`} className="nav-item">
            <div>
              <div>
                {icon && (
                  <span className="nav-item-icon">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                )}
                <p>{item}</p>
              </div>

              <button className="expand">
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
