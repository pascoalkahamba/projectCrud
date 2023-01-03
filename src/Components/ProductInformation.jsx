import React from "react";
import Delete from "./Delete";
import Edit from "./Edit";

const ProductInformation = ({
  data,
  setData,
  setForm,
  setEdit,
  setUpdateName,
}) => {
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
            <td> {index + 1}</td>
            <td>{elem.product}</td>
            <td>{elem.price}</td>
            <td className="flexIcon">
              <Edit
                data={data}
                index={index}
                setData={setData}
                elem={elem}
                setForm={setForm}
                setEdit={setEdit}
                setUpdateName={setUpdateName}
              />
              <Delete data={data} index={index} setData={setData} />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default ProductInformation;
