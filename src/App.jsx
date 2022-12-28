import React, { useState } from "react";

import "./App.css";
import Myform from "./Components/Myform";
import ProductInformation from "./Components/ProductInformation";

function App() {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);

  function saveData(value) {
    setName([...name, value]);
    console.log(value);
    console.log(name);
  }
  return (
    <div className="App">
      <header className="header">
        <h1>Minha Empresa</h1>
      </header>
      <section className="container">
        <div className="title">
          <h1>Produtos</h1>
          <span>Lista de produtos da minha loja</span>
        </div>
        <Myform saveData={saveData} />
        <ProductInformation />
      </section>
    </div>
  );
}

export default App;
