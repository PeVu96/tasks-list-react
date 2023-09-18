import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [hideTasks, setHideTasks] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na Reacta", done: false },
    { id: 2, content: "zjeść obiad", done: true },
  ]);

  const toggleHideTasks = () => {
    setHideTasks(hideTasks => !hideTasks);
  };

  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const markTasksAsDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    }));
  };

  const completeTasks = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (content) => {
    if (content !== "") {
      setTasks(tasks => [
        ...tasks,
        {
          content,
          done: false,
          id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        },
      ]);
    };
  };

  return (
    <Container className="container">
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form
            addNewTask={addNewTask}
          />
        }
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideTasks={hideTasks}
            removeTasks={removeTasks}
            markTasksAsDone={markTasksAsDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideTasks={hideTasks}
            toggleHideTasks={toggleHideTasks}
            completeTasks={completeTasks}
          />
        }
      />
    </Container>
  );
}

export default App;
