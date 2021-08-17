import React, { useState } from "react";
import "./App.css";

import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const OrderItemsContext = React.createContext(null);

const App = () => {
  const [orders, setOrders] = useState([]);

  return (
    <OrderItemsContext.Provider
      value={{
        orders,
        setOrders,
      }}
    >
      <Router>
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </OrderItemsContext.Provider>
  );
};

export default App;
