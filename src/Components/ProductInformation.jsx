import React from "react";
import Delete from "./Delete";
import Edit from "./Edit";

const ProductInformation = ({ data, setData, setForm, setIndex, index }) => {
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
      {data.map((elem, keys) => (
        <tbody key={keys}>
          <tr>
            <td>{elem.id + 1}</td>
            <td>{elem.product}</td>
            <td>{elem.price}</td>
            <td className="flexIcon">
              <Edit elem={elem} setForm={setForm} setIndex={setIndex} />
              <Delete data={elem} setData={setData} index={index} />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default ProductInformation;
