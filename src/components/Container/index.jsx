import NavBar from "../NavBar";
import styles from "./styles.modules.scss";

const Container = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sxColumn}></div>;
      <NavBar />
      <div className={styles.dxColumn}></div>;
    </div>
  );
};

export default Container;
