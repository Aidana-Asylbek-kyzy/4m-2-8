import React from "react";

const Button = ({addtask}) => {
  return (
    <div className="todo-input-item">
    <button className="primary-btn" type="button" onClick={addtask}>
      Add
    </button>
  </div>
  );
};

export default Button;