import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <p>
          Hello! Ut autem eius aut sint quod et aliquid inventore ut quia
          eligendi sit atque impedit et mollitia tempora sed iste corporis. Est
          dolorem placeat et dolor quidem hic quas officiis nam mollitia quae et
          libero esse non odit fuga sit error doloremque. Et dolores deleniti
          sit quaerat veritatis ad temporibus ipsa aut voluptas eius rem
          officiis doloremque eos iste similique. Et quibusdam pariatur aut
          minus dolore non ratione quos non quibusdam consequatur et cupiditate
          natus!
        </p>
      </div>
      <div className={styles.img}>
        <img src="https://picsum.photos/300/300" alt="img" />
        <img src="https://picsum.photos/200/200" alt="img" />
        <img src="https://picsum.photos/200/200" alt="img" />
      </div>
      <div className={styles.description}>
        <p>
          Eum blanditiis quod 33 facilis quod et inventore veritatis ut mollitia
          recusandae et aspernatur cumque. Sed dolor quae sit minus rerum aut
          dolorum numquam. Et veniam natus id voluptatem quis aut nobis officia
          eos itaque autem. Et dolores deleniti sit quaerat veritatis ad
          temporibus ipsa aut voluptas eius rem officiis doloremque eos iste
          similique. Et quibusdam pariatur aut minus dolore non ratione quos non
          quibusdam consequatur et cupiditate natus!
        </p>
      </div>
    </div>
  );
};

export default Home;
