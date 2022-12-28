import React from "react";
import Delete from "./Delete";
import Edit from "./Edit";

const ProductInformation = () => {
  return (
    <table className="table">
      <thead>
        <tr className="head">
          <th>ID</th>
          <th>Produtos</th>
          <th>Valor</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>Notebook</td>
          <td>200.000</td>
          <td className="flexIcon">
            <Edit />
            <Delete />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductInformation;
