import React from "react";
import Delete from "./Delete";
import Edit from "./Edit";

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
        <td>
          <Edit />
          <Delete />
        </td>
      </tr>
    </table>
  );
};

export default ProductInformation;
