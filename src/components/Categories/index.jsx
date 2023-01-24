import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { GET } from "../../libs/HTTP";
import Table from "../Table";

const Categories = () => {
  const categoriesStateInit = {
    category: [],
    loading: false,
  };

  const [categoriesState, setCategoriesState] = useState(categoriesStateInit);

  const getData = () => {
    GET("categories").then((data) =>
      setCategoriesState({
        loading: false,
        categories: data,
      })
    );
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.main}>
      <h3>Categories</h3>
      <Table
        categoriesState={categoriesState.categories}
        loading={categoriesState.loading}
        getData={getData}
      />
    </div>
  );
};

export default Categories;
