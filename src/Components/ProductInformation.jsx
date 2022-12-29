import React from "react";
import Delete from "./Delete";
import Edit from "./Edit";

const ProductInformation = ({ data }) => {
  if (data.length === 0) return null;
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
      {data.map((elem, index) => (
        <tbody key={index}>
          <tr>
            <td> {1 + index}</td>
            <td>{elem.product}</td>
            <td>{elem.price}</td>
            <td className="flexIcon">
              <Edit />
              <Delete />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default ProductInformation;
