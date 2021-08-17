import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/48341aa7-8543-4a45-81b5-44e7db3378d3")
      .then((res) => {
        setMenuItems(res.data);
      });
  }, []);
  return menuItems;
};

export default useFetchMenuItems;
