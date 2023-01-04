import React from "react";
import photo from "../img/icons8-edit-30.png";

const Edit = ({ elem, setForm, setIndex }) => {
  function handleEdit() {
    setIndex(elem.id);
    setForm(elem);
  }
  return (
    <button onClick={handleEdit}>
      <img src={photo} alt="Photo for edit element" />
    </button>
  );
};

export default Edit;
