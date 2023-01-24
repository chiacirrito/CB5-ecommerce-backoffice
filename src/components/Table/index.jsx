import styles from "./styles.module.scss";

/* const Table = ({ categoriesState, getData, loading }) => {
  return (
    <div className={styles.main}>
      <div className={styles.tableHead}>Categories</div>
      {loading ? (
        "loading..."
      ) : (
        <div className={styles.tableBody}>
          {categoriesState.map((item) => (
            <div className={styles.tableRow} key={item.id}>
              <p>{item.id}</p>
              <img src={item.image} alt={item.name} />
              <p className={styles.name}>{item.name.substringa(0, 20)}</p>
            </div>
          ))}
        </div>
      )}
      ;
    </div>
  );
}; */

const Table = () => {
  return <p>Work in progress!</p>;
};

export default Table;
