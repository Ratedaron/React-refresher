import './App.css';
import Car from './Car.js'

function Car1() {
  return (
    <h1>Hi I am a Car</h1>
  );
}

const car = { name: "Ford", type: "FastCar" }

function App(para) {
  const carName = "Ford MUSSTANG"
  return (
    <div className="App">
      <h1>Who Is in this Gradge??</h1>
      <Car1 />
      <Car brand={car} />
      <br />
      <h1>I'm driving a {para.color} car</h1>
    </div>
  );
}

export default App;
