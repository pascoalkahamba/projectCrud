import React from "react";

const Input = ({ type, id, label, placeholder }) => {
  return (
    <div className="data">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default Input;
