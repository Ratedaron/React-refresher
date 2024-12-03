import './App.css';

function calc(a, b) {
  const add = a + b
  const subtract = a - b
  const multiply = a * b
  const divide = a / b
  return [a, b, add, subtract, multiply, divide]
}

const [a, b, add, subtract, multiply, divide] = calc(16893, 12345678)

function App() {
  return (
    <div className="App">
      <h1>Number {a} and {b}</h1>
      <h1>add = {add}</h1>
      <h1>subtract {b} from {a} = {subtract}</h1>
      <h1>multiply  = {multiply}</h1>
      <h1>divide {a} with {b}  = {divide}</h1>
    </div>
  );
}

export default App;
