import React, { useState } from "react";

const Myform = ({ saveData }) => {
  const [form, setForm] = useState({ nome: "", valor: "" });
  function handleChange({ target }) {
    setForm({ ...form, [target.id]: target.value });
  }
  function handleClick(event) {
    event.preventDefault();
    saveData(form);
    console.log(form);
  }
  return (
    <form className="form data">
      <label htmlFor="nome">Produto</label>

      <input
        type="text"
        id="nome"
        placeholder="Digite o produto"
        onChange={handleChange}
        value={form.nome}
      />
      <label htmlFor="valor">Valor</label>
      <input
        type="number"
        id="valor"
        value={form.valor}
        placeholder="Digite o valor"
        onChange={handleChange}
      />
      <div className="buttons">
        <button onClick={handleClick}>salvar</button>
        <button>cancelar</button>
      </div>
    </form>
  );
};

export default Myform;
