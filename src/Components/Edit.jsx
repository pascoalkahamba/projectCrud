import React from "react";
import photo from "../img/icons8-edit-30.png";

const Edit = ({ elem, setData, data, setForm, setEdit, setUpdateName }) => {
  function handleEdit() {
    setUpdateName("Atualizar");
    setEdit(true);
    setForm(elem);
    console.log("Edit");
  }
  return (
    <div onClick={handleEdit}>
      <img src={photo} alt="Photo for edit element" />
    </div>
  );
};

export default Edit;
