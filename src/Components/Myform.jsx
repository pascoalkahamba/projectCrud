import React, { useState } from "react";

const Myform = ({ saveData }) => {
  const [texto, setTexto] = useState("");
  function handleClick(event) {
    event.preventDefault();
    saveData(texto);
    console.log(texto);
  }
  return (
    <form className="form data">
      <label htmlFor="nome">Produto</label>

      <input
        type="text"
        id="nome"
        placeholder="Digite o produto"
        value={texto}
        onChange={({ target }) => setTexto(target.value)}
      />
      <label htmlFor="valor">Valor</label>
      <input type="number" id="valor" placeholder="Digite o valor" />
      <div className="buttons">
        <button onClick={handleClick}>salvar</button>
        <button>cancelar</button>
      </div>
    </form>
  );
};

export default Myform;
