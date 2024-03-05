import React, { useState } from "react";
import "./todo.css";
import TodoItem from "../../../../../../../../components/todoItem/todoItem";
import { ReactComponent as Payroll } from "../../../../../../../../assets/svg/payroll.svg";
import { ReactComponent as Clock } from "../../../../../../../../assets/svg/clock.svg";
import { ReactComponent as Board } from "../../../../../../../../assets/svg/board.svg";
// import { ReactComponent as Finished } from "../../../../../../../../assets/svg/finished.svg";
import { ReactComponent as Add } from "../../../../../../../../assets/svg/add.svg";
import AddToDoModal from "./modal/addToDo";

const TodoList = () => {
  const [isOpen, setIsOpen] = useState();
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      id: 1,
      title: "Run Payroll",
      desc: "Mar 4th at 6:00 pm",
      component: <Payroll />,
    },
    {
      id: 2,
      title: "Review time off request",
      desc: "Mar 7 at 8:00 pm",
      component: <Clock />,
    },
    {
      id: 3,
      title: "Sign board resoluation",
      desc: "Mar 12 at 8:30 pm",
      component: <Board />,
    },
    // {
    //   id: 4,
    //   title: "Finish onboarding Tony",
    //   desc: "Mar 12 at 9:30 pm",
    //   component: <Finished />,
    // },
  ];

  return (
    <div className="todo-main">
      <h1>Your to-Do List</h1>
      <div className="todo-items-list">
        {items.map((item) => (
          <TodoItem title={item.title} desc={item.desc} key={item.id}>
            {item.component}
          </TodoItem>
        ))}
      </div>
      <div className="add-todo-item-main" onClick={toggleModal}>
        <Add />
        <div className="add-todo-item-title">Add To Do</div>
      </div>
      {isOpen && <AddToDoModal toggleModal={toggleModal} />}
    </div>
  );
};

export default TodoList;
