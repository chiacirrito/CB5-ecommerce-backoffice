import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.main}>
      <p>E-commerce</p>
      <div className={styles.logo}>
        <h1>Hello!</h1>
      </div>
      <div className={styles.btnSet}>🔘</div>
    </div>
  );
};

export default Header;
