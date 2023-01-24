import styles from "./styles.module.scss";
const LiComponent = ({ label, icon, setRoute, routeUrl }) => {
  return (
    <ul>
      <li onClick={() => setRoute(routeUrl)} className={styles.main}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.label}>{label}</div>
      </li>
    </ul>
  );
};

export default LiComponent;
