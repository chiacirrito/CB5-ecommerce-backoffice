import { navBarLinks } from "../../constants/navbar";
import LiComponent from "./../LiComponent";
import styles from "./styles.module.scss";

const NavBar = ({ setRoute }) => {
  return (
    <ul className={styles.main}>
      {navBarLinks.map((item, index) => (
        <LiComponent
          setRoute={setRoute}
          routeUrl={item.route}
          icon={item.icon}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default NavBar;
