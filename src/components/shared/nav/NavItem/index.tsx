import React, { useState } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Nav.scss"

type navitemProp = {
  index: number;
  item: string;
  icon: JSX.Element;
};

function NavItem({ index, item, icon }: navitemProp) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (idx: number) => {
    if (idx === 0) {
      setToggle(!toggle);
    }
  };
  return (
    <div className={toggle ? "open": "sidebar-item"}>
      <div className="sidebar-main-item">
        <div className="main-item-text">
          {icon && <span className="nav-item-icon">{icon}</span>}
          <p>{item}</p>
        </div>
        <div className="item-arrow" onClick={() => handleToggle(index)}>
          <FontAwesomeIcon
            className={toggle ? `turn-${index}` : "roll-back"}
            icon={faAngleRight}
          />
        </div>
      </div>
      {index === 0 && (
        <div className={toggle ? "subitem": "disnone"}>
          <p>Message</p>
          <p>Information</p>
        </div>
      )}
    </div>
  );
}

export default NavItem;
