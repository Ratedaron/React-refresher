import './App.css';

function football() {
  const shoot = (a, b) => {
    alert(a + ' + ' + b.currentTarget)
  }

  return (<button id="button" onClick={(event) => shoot("GOALLLL", event)}>Shooott</button>)
}


function App() {
  return (
    <div className="App">
      {football()}
    </div>
  );
}

export default App;