import React, { useContext } from "react";
import "./Orders.css";
import { OrderItemsContext } from "../../App";

import Header from "../../components/Header/Header";

const Orders = () => {
  const { orders } = useContext(OrderItemsContext);
  return (
    <div className="container">
      <Header />
      <div className="orders-wraper">
        {orders.length > 0 ? (
          <div className="orders-list">
            {orders.map((order, index) => {
              const newString = order.value.replaceAll("/", " | ");
              return (
                <div className="order-item" key={index}>
                  <div className="order-item-index">
                    <span>{index + 1}</span>
                  </div>
                  <span>{newString}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <span>No Orders</span>
        )}
      </div>
    </div>
  );
};

export default Orders;
