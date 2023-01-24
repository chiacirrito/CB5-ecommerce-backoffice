import { useState } from "react";
import Home from "./../Home";
import Categories from "./../Categories";
import NavBar from "../NavBar";
import styles from "./styles.modules.scss";

const Container = () => {
  const [route, setRoute] = useState("home");
  const changeRoute = (routeParam) => {
    setRoute(routeParam);
  };

  return (
    <div className={styles.main}>
      <div className={styles.sxColumn}>
        <NavBar setRoute={changeRoute} />
      </div>
      <div className={styles.dxColumn}>
        {route === "home" && <Home />}
        {route === "categories" && <Categories />}
        {route === "products" && <div>Products</div>}
        {route === "orders" && <div>Orders</div>}
        {route === "users" && <div>Users</div>}
      </div>
    </div>
  );
};

export default Container;
