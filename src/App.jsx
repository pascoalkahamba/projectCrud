import react from "react";
import "./App.css";
import Input from "./Components/Input";

function App() {
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

        <div className="form">
          <Input
            type="text"
            label="Produto"
            placeholder="Digite o produto"
            id="produto"
          />
          <Input
            type="number"
            label="Valor"
            placeholder="Digite o valor"
            id="valor"
          />
          <div className="buttons">
            <button>enviar</button>
            <button>cancelar</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
