import React from "react";
import photo from "../img/download.png";

const Delete = ({ data, setData, index }) => {
  function handleDelete() {
    if (confirm(`Deseja excluir o item ${data.id + 1} da lista?`)) {
      setData((preview) => preview.filter((item) => item.id != data.id));
    }
  }

  return (
    <button onClick={handleDelete} disabled={index ? true : false}>
      <img src={photo} alt="Photo for delete element" />
    </button>
  );
};

export default Delete;
