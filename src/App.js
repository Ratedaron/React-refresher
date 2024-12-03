import './App.css';

const x = 9
function App() {
  return (
    <div className="App">
      <h1>Quick Math: 5+5 is {5 + 5}</h1>
      <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>
    </div>
  );
}

export default App;
