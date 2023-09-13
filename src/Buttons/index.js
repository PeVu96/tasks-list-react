import "./style.css";

const Buttons = ({ tasks, hideTasks, toggleHideTasks, completeTasks }) => {
  if (tasks.length === 0) {
    return null;
  };

  return (
    <div className="buttons">
      <button
        className="buttons__button"
        onClick={toggleHideTasks}
      >
        {hideTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
        onClick={completeTasks}
      >
        Ukończ wszystkie
      </button>
    </div>
  )
};

export default Buttons;