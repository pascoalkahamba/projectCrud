import React from "react";
import photo from "../img/download.png";

const Delete = ({ index, data, setData }) => {
  function handleDelete() {
    if (confirm(`Deseja excluir o item ${index + 1} da lista?`)) {
      const newData = data.filter((item, id) => id != index);
      setData(newData);
    }
  }
  return (
    <div onClick={handleDelete}>
      <img src={photo} alt="Photo for delete element" />
    </div>
  );
};

export default Delete;
