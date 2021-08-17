import React from "react";
import "./MenuItem.css";
import checkIcon from "../../assets/images/checked-icon.png";
import collapseIcon from "../../assets/images/collapse-icon.png";

const MenuItem = ({ onChange, isCheckable, checked, name }) => {
  return (
    <div className={isCheckable ? "menu-item checkable" : "menu-item"}>
      <div
        className={
          isCheckable ? "checkbox-wrapper checkable" : "checkbox-wrapper"
        }
      >
        <input
          onChange={onChange}
          checked={checked}
          className="checkbox"
          type="checkbox"
        />
        {isCheckable ? (
          <img src={checkIcon} className="icon checkable" alt="check_icon"/>
        ) : (
          <img src={collapseIcon} className="icon collapsable" alt="check_icon"/>
        )}
      </div>
      <div className="title">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default MenuItem;
