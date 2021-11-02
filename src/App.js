import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Android App Development" />
      <Todo text="Learn Flutter" />
    </div>
  );
}

export default App;
