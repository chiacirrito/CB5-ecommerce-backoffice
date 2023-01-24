import styles from "./styles.module.scss";
import { GrEmoji, GrSpa, GrPowerCycle } from "react-icons/gr";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <GrEmoji />
      <GrSpa />
      <GrPowerCycle />
    </div>
  );
};

export default Footer;
