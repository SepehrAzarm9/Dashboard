import React from "react";
import "./todo.css";
import TodoItem from "../../../../../../components/todoItem/todoItem";
import { ReactComponent as Payroll } from "../../../../../../assets/svg/payroll.svg";
import { ReactComponent as Clock } from "../../../../../../assets/svg/clock.svg";
import { ReactComponent as Board } from "../../../../../../assets/svg/board.svg";
import { ReactComponent as Finished } from "../../../../../../assets/svg/finished.svg";

const TodoList = () => {
  return (
    <div className="todo-main">
      <h1>Your to-Do List</h1>
      <TodoItem title="Run Payroll" desc="Mar 4th at 6:00 pm">
        <Payroll />
      </TodoItem>
      <TodoItem title="Review time off request" desc="Mar 7 at 8:00 pm">
        <Clock />
      </TodoItem>
      <TodoItem title="Sign board resoluation" desc="Mar 12 at 8:30 pm">
        <Board />
      </TodoItem>
      <TodoItem title="Finish onboarding Tony" desc="Mar 12 at 9:30 pm">
        <Finished />
      </TodoItem>
    </div>
  );
};

export default TodoList;
