import styles from "./styles.module.scss";
import styled from "styled-components";

const Home = () => {
  const Container = styled.div`
    display: flex;
    justify-conter: center;
    align-items: center;
    gap: 5px;
    margin: 100px;
    flex-wrap: wrap;
  `;

  const Popular = styled.div`
    display: flex;
    justify-conter: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 40px;
    gap: 30px;
  `;

  return (
    <div className={styles.main}>
      <Container>
        <h1>Your Favorite Shop!</h1>
        <img
          src="https://www.elimeli.it/wp-content/uploads/2021/01/Come-piegare-i-vestiti-in-valigia-per-risparmiare-spazio-1160x870.jpg"
          alt="img"
        />
      </Container>
      <h5>Popular products</h5>
      <Popular>
        <h6>#Shoes</h6>
        <h6>#Nike</h6>
        <h6>#Sport</h6>
      </Popular>
      <div className={styles.images}>
        <img
          src="https://m.media-amazon.com/images/I/51L8QJ2z1SL._AC_SY625._SX._UX._SY._UY_.jpg"
          alt="img"
        />
        <img
          src="https://m.media-amazon.com/images/I/51+B0XrcJDL._AC_UY625_.jpg"
          alt="img"
        />
        <img
          src="https://m.media-amazon.com/images/I/51anuZXrunL._AC_SY625._SX._UX._SY._UY_.jpg"
          alt="img"
        />
        <img
          src="https://m.media-amazon.com/images/I/41KbvAae7DL._AC_UY625_.jpg"
          alt="img"
        />
        <img
          src="https://m.media-amazon.com/images/I/71fpMl1DmbS._AC_SX625._SX._UX._SY._UY_.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Home;
