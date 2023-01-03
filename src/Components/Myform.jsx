import React from "react";

const Myform = ({
  saveData,
  setForm,
  form,
  updateName,
  setUpdateName,
  setEdit,
}) => {
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
      return true;
    }
    return false;
  }
  function handleCancel(event) {
    event.preventDefault();
    setForm({ product: "", price: "" });
    setEdit(null);
    setUpdateName("Salvar");
  }
  function handleClick(event) {
    event.preventDefault();
    if (!isEmpty(form)) saveData();
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
        <button onClick={handleClick}> {updateName}</button>
        <button onClick={handleCancel}>cancelar</button>
      </div>
    </form>
  );
};

export default Myform;
