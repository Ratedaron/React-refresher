import './App.css';

function Football() {
  const shoot = (a, b) => {
    alert(a + " + " + b.type);
  }
  return (
    <button id="button" onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}

function App() {
  return (
    <div className="App">
      <h1>{Football()}</h1>
    </div>
  );
}

export default App;
