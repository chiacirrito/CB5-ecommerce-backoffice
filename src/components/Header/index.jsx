import styles from "./styles.module.scss";
import { GrDiamond, GrFavorite } from "react-icons/gr";

const Header = () => {
  return (
    <div className={styles.main}>
      <GrDiamond />
      <div className={styles.logo}>
        <h1>Hello!</h1>
      </div>
      <GrFavorite />
    </div>
  );
};

export default Header;
