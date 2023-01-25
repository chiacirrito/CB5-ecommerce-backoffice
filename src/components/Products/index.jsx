import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { GET } from "../../libs/HTTP";
import Cards from "../Cards";

const Products = () => {
  const productsStateInit = {
    products: [],
    loading: true,
  };

  const [productsState, setProductsState] = useState(productsStateInit);

  const getData = () => {
    setProductsState({ ...productsState, loading: true });
    GET("products").then((data) =>
      setProductsState({
        loading: false,
        products: data,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.main}>
      <h3>Products</h3>
      <Cards
        productsState={productsState.products}
        loading={productsState.loading}
        getData={getData}
      />
    </div>
  );
};

export default Products;
