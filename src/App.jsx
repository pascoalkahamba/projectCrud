import React, { useState } from "react";

import "./App.css";
import Myform from "./Components/Myform";
import ProductInformation from "./Components/ProductInformation";

function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ product: "", price: "" });
  const [id, setId] = useState(0);
  const [index, setIndex] = useState(null);

  function saveData() {
    if (index === null) {
      setData([...data, { ...form, id }]);
      setId((id) => id + 1);
    } else {
      const newData = data.map((element) => {
        if (element.id === index) {
          return form;
        } else {
          return element;
        }
      });
      setData(newData);
      setIndex(null);
    }

    setForm({ product: "", price: "" });
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
        <Myform
          setForm={setForm}
          saveData={saveData}
          form={form}
          index={index}
          setIndex={setIndex}
        />
        <ProductInformation
          data={data}
          setData={setData}
          setForm={setForm}
          setIndex={setIndex}
          index={index}
        />
      </section>
    </div>
  );
}

export default App;
