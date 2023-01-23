import { navBarLinks } from "../../constants/navbar";
import styles from "./styles.module.scss";

const NavBar = () => {
  return (
    <ul cassName={styles.main}>
      {navBarLinks.map((item, index) => (
        <li key={index}>{item.label}</li>
      ))}
    </ul>
  );
};

export default NavBar;
