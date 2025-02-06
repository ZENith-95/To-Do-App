import React from "react";
import Todo from "./components/todo";



function App(props) {
  const tasksRemaining = props.tasks.filter((task) => !task.completed).length;
  const taskList = props.tasks.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} />
  ));
  return (
    <div className="todoapp stack-large">
      <h2>To-Do Matic</h2>
      <form action="submit" className="label-wrapper">
        <label htmlFor="new-Todo-input" className="label__lg</label>">
          What needs to be done?
        </label>

        <input type="text" id="new-Todo-input" className="input input__lg" />
        <button type="submit" className="btn btn__primary btn__lg">
          <span className="visually-hidden">Add</span>
          <span>+</span>
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show</span>
          <span>All</span>
          <span className="visually-hidden">Tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show</span>
          <span>Active</span>
          <span className="visually-hidden">Tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show</span>
          <span>Completed</span>
          <span className="visually-hidden">Tasks</span>
        </button>
      </div>
      <h2 id="list-heading">{tasksRemaining} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}

      </ul>
    </div>
  );
}

export default App;
