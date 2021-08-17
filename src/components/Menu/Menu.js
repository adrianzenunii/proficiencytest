import React, { useState } from "react";
import "./Menu.css";

import MenuItem from "../MenuItem/MenuItem";

const Menu = ({ menuItems, orders, setOrders }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleMenuItemChange = (item, shown, isLastItem, ancestorsString) => {
    if (isLastItem) {
      if (!shown) {
        setOrders((prevOrders) => {
          return [
            ...prevOrders,
            {
              id: item.id,
              value: ancestorsString + "/" + item.name,
            },
          ];
        });
      } else {
        setOrders((prevOrders) => {
          const newArray = prevOrders.filter(
            (prevSItem) => prevSItem.id !== item.id
          );
          return newArray;
        });
      }
    } else {
      if (shown) {
        setSelectedItems((prevSelectedItems) => {
          const newArr = prevSelectedItems.filter(
            (prevItemId) => prevItemId !== item.id
          );
          return newArr;
        });
      } else {
        setSelectedItems((prevSelectedItems) => {
          return [...prevSelectedItems, item.id];
        });
      }
    }
  };

  //Renders MenuItems and sub-lists recursively
  const renderChildrenOfParent = (parentId, ancestorsString) => {
    let itemsOfParent = menuItems.filter((item) => item.parent === parentId);

    return itemsOfParent.length !== 0
      ? itemsOfParent.map((item, index) => {
          const isLastItem =
            menuItems.filter((i) => i.parent === item.id).length === 0
              ? true
              : false;

          let shown = selectedItems.includes(item.id);

          if (isLastItem) shown = orders.some((sItem) => sItem.id === item.id);

          return (
            <div className="menu-item-wrapper" key={item.id}>
              <MenuItem
                key={index}
                checked={shown}
                isCheckable={isLastItem}
                onChange={() => {
                  handleMenuItemChange(
                    item,
                    shown,
                    isLastItem,
                    ancestorsString
                  );
                }}
                name={item.name}
              />
              {shown && (
                <div className="submenu">
                  {renderChildrenOfParent(
                    item.id,
                    ancestorsString !== null
                      ? ancestorsString + "/" + item.name
                      : item.name
                  )}
                </div>
              )}
            </div>
          );
        })
      : null;
  };

  return <ul className="menu">{renderChildrenOfParent(0, null)}</ul>;
};

export default Menu;
