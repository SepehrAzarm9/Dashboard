import React from "react";
import "./todoItem.css";

const TodoItem = ({ children, title, desc }) => {
  return (
    <div className="todo-item-main">
      {children}
      <div className="todo-item-content">
        <div className="todo-item-title">{title}</div>
        <div className="todo-item-desc">{desc}</div>
      </div>
    </div>
  );
};

export default TodoItem;
