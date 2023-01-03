import React, { useState } from "react";

const Myform = ({ saveData }) => {
  const [form, setForm] = useState({ product: "", price: "" });

  function handleChange({ target }) {
    setForm({ ...form, [target.id]: target.value });
  }
  function isEmpty(products) {
    let message = "";
    if (products.product === "") {
      message += "Digite o nome do produto\n";
    }
    if (products.price === "") {
      message += "Digite o preço";
    }
    if (message !== "") {
      alert(message);
      return false;
    }
    return true;
  }
  function handleCancel(event) {
    event.preventDefault();
    console.log("Cancelar");
    // form.product.focus();
  }
  function handleClick(event) {
    event.preventDefault();
    if (isEmpty(form)) saveData(form);
  }
  return (
    <form className="form data">
      <label htmlFor="product">Produto</label>

      <input
        type="text"
        id="product"
        placeholder="Digite o produto"
        onChange={handleChange}
        value={form.product}
      />
      <label htmlFor="price">Valor</label>
      <input
        type="number"
        id="price"
        value={form.price}
        placeholder="Digite o preço"
        onChange={handleChange}
      />
      <div className="buttons">
        <button onClick={handleClick}>salvar</button>
        <button onClick={handleCancel}>cancelar</button>
      </div>
    </form>
  );
};

export default Myform;
