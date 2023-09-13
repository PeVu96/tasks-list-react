import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

function App() {
  const [hideTasks, setHideTasks] = useState(false);

  const toggleHideTasks = () => {
    setHideTasks(hideTasks => !hideTasks);
  };

  return (
    <Container className="container">
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideTasks={hideTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideTasks={hideTasks} toggleHideTasks={toggleHideTasks} />}
      />
    </Container>
  );
}

export default App;
