import ToDoApp from "./Components/ToDoApp";

function App() {

  return (
    <div className="h-[100vw] bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <h2 className="text-3xl text-center text-success font-bold py-4">My To-Do App</h2>
      <ToDoApp />
    </div>
  );
}

export default App;
