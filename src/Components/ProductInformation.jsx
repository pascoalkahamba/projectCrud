import React from "react";

const ProductInformation = () => {
  return (
    <table className="table">
      <tr className="head">
        <th>ID</th>
        <th>Produtos</th>
        <th>Valor</th>
        <th>Ações</th>
      </tr>
      <tr className="bodytr">
        <td>01</td>
        <td>Notebook</td>
        <td>200.000</td>
        <td>encluir, editar</td>
      </tr>
      <tr className="bodytr">
        <td>01</td>
        <td>Smartphone</td>
        <td>100.000</td>
        <td>encluir, editar</td>
      </tr>
    </table>
  );
};

export default ProductInformation;
