import React from "react";
import photo from "../img/download.png";

const Delete = ({ index, data, setData }) => {
  function handleDelete() {
    const newData = data.filter((item, id) => id != index);

    console.log(index);
    setData(newData);
    console.log(newData);
  }
  return (
    <div onClick={handleDelete}>
      <img src={photo} alt="Photo for delete element" />
    </div>
  );
};

export default Delete;
