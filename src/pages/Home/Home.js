import React, { useContext } from "react";
import "./Home.css";

import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import useFetchMenuItems from "../../hooks/useFetchMenuItems";
import { OrderItemsContext } from "../../App";

const Home = () => {
  const history = useHistory();
  const { orders, setOrders } = useContext(OrderItemsContext);
  const menuItems = useFetchMenuItems();

  return (
    <div className="container">
      <Header />
      <div className="menu-wrapper">
        <Menu menuItems={menuItems} orders={orders} setOrders={setOrders} />
        <button
          className="summary-btn"
          onClick={() => {
            history.push("/orders");
          }}
          type="button"
        >
          Show Orders
        </button>
      </div>
    </div>
  );
};

export default Home;
