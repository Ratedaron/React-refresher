import './App.css'

const arrowFunction = () => {
  return "Hi there"
}

const smallFunction = () => "Hey there its me again"

const funtionWithNumber = () => 1234256

function App() {
  return (
    <div className="App">
      <h1>{arrowFunction()}</h1>
      <br />
      <h1>{smallFunction()}</h1>
      <br />
      <h1>{funtionWithNumber()}</h1>
    </div>
  );
}


export default App