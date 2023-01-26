import styles from "./styles.module.scss";
import { useState } from "react";
import { PUT } from "../../libs/HTTP";
import { TbEdit, TbTrash } from "react-icons/tb";

const Cards = ({ item, deleteElement, reloadItems }) => {
  const [formData, setFormData] = useState({
    title: item.title,
    price: item.price,
    images: [item.images[0]],
  });
  const [showForm, setShowForm] = useState(false);

  const handleForm = (input, e) => {
    let inputValue = e.target.value ? e.target.value : 0;
    if (input === "price" || input === "categoryId") {
      inputValue = parseInt(inputValue);
    }

    if (input === "images") {
      inputValue = [inputValue];
    }

    setFormData({
      ...formData,
      [input]: inputValue,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    PUT("products", formData, item.id)
      .then((res) => res.json())
      .then((data) => {
        setShowForm(false);
        reloadItems();
        console.log(data);
      });
  };

  return (
    <div className={styles.main}>
      <img src={item.images[0]} alt={item.title} />
      <h5>{item.title}</h5>
      <h5>{item.price}$</h5>
      <div className={styles.btn}>
        <TbTrash onClick={() => deleteElement(item.id)}>{item.title}</TbTrash>{" "}
        <TbEdit onClick={() => setShowForm(!showForm)}></TbEdit>
        {showForm && (
          <form onSubmit={(e) => submitForm(e)}>
            <input
              value={formData.title}
              onChange={(e) => handleForm("title", e)}
              type="text"
            />
            <input
              value={formData.price}
              onChange={(e) => handleForm("price", e)}
              type="text"
            />
            <input
              value={formData.images[0]}
              onChange={(e) => handleForm("images", e)}
              type="text"
            />
            <input type="submit" value="invia" />
          </form>
        )}
      </div>
    </div>
  );
};
export default Cards;
