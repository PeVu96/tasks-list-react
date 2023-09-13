import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideTasks = false;

function App() {
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
        extraHeaderContent={<Buttons tasks={tasks} hideTasks={hideTasks} />}
      />
    </Container>
  );
}

export default App;
