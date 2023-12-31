import "./style.css";

const Tasks = ({ tasks, hideTasks, removeTasks, markTasksAsDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`tasks__item${task.done && hideTasks ? " tasks__item--hidden" : ""}`}>
        <button
          className="tasks__button tasks__button--toggleDone"
          onClick={() => markTasksAsDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </button>
        <span className={`tasks__content ${task.done ? "tasks__content--done" : ""}`}>
          {task.content}
        </span>
        <button
          className="tasks__button tasks__button--remove"
          onClick={() => removeTasks(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;