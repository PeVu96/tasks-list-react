import "./style.css";

const Buttons = ({ tasks, hideTasks }) => {
  if (tasks.length === 0) {
    return null;
  };

  return (
    <div className="buttons">
      <button className="buttons__button">
        {hideTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  )
};

export default Buttons;