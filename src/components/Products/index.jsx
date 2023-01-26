import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { DELETE, GET } from "../../libs/HTTP";
import Cards from "../Cards";

const Products = () => {
  const [products, setProducts] = useState([]);

  const reloadItems = () => {
    GET("products").then((data) => setProducts(data));
  };

  useEffect(() => {
    reloadItems();
  }, []);

  const deleteElement = (id) => {
    DELETE("products", id).then((data) => {
      if (data.status === 200) {
        reloadItems();
      }
    });
  };

  return (
    <div className={styles.main}>
      <ul>
        {products.map((item, index) => (
          <Cards
            reloadItems={reloadItems}
            deleteElement={deleteElement}
            item={item}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
