import React, { useState } from "react";

import "./App.css";
import Myform from "./Components/Myform";
import ProductInformation from "./Components/ProductInformation";

function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ product: "", price: "" });
  const [edit, setEdit] = useState(null);
  const [updateName, setUpdateName] = useState("Salvar");
  function saveData() {
    if (edit === null) {
      setData([...data, form]);
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
          updateName={updateName}
          setUpdateName={setUpdateName}
          setEdit={setEdit}
        />
        <ProductInformation
          data={data}
          setData={setData}
          setForm={setForm}
          setEdit={setEdit}
          setUpdateName={setUpdateName}
        />
      </section>
    </div>
  );
}

export default App;
