import React, { useState } from "react";

import "./App.css";
import Myform from "./Components/Myform";
import ProductInformation from "./Components/ProductInformation";

function App() {
  const [data, setData] = useState([]);

  function saveData(value) {
    setData([...data, value]);
    console.log(value);
    console.log(data);
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
        <ProductInformation data={data} />
      </section>
    </div>
  );
}

export default App;
