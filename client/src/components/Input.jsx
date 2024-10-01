import React from "react";

const Input = ({ placeholder, value, id }) => {
  return (
    <div>
      <label>
        <span>{label}</span>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          id={id}
          onChange={onchange}
          className="bg-white"
        />
      </label>
    </div>
  );
};

export default Input;
