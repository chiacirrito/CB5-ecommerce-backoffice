import EditBtn from "../EditBtn";
import styles from "./styles.module.scss";

const Cards = ({ data, productsState, getData, loading }) => {
  return (
    <div className={styles.main}>
      <p>Elements</p>
      {loading ? (
        "loading..."
      ) : (
        <div className={styles.body}>
          {productsState.map((data) => (
            <div className={styles.elements} key={data.id}>
              <img src={data.images} alt={data.title} />
              <p className={styles.name}>{data.title}</p>
              <p className={styles.price}>{data.price}</p>
            </div>
          ))}

          <div className={styles.btnSet}>
            <EditBtn
              getData={getData}
              data={{
                title: data.title,
                image: data.image,
                price: data.price,
                id: data.id,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
