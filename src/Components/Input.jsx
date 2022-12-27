import React from "react";

const Input = ({ type, id, label }) => {
  return (
    <div className="data">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
};

export default Input;
