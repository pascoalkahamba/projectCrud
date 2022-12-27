import react from "react";
import "./App.css";

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
          <div className="data">
            <label htmlFor="nome">Produto</label>
            <input type="text" id="nome" />
          </div>
          <div className="data">
            <label htmlFor="value">Valor</label>
            <input type="text" id="value" />
          </div>
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
