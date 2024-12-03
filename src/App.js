import './App.css';

const vehicles = ['mustang', 'Ferari', 'f-150', 'f-40'];
//const myArrayOfHeaders = ['Welcome', 'to', 'my', 'World'];

const [car, sportsCar, truck, plane] = vehicles

const [car2, sportsCar2,, plane2 ] = vehicles

function App() {
  return (
    <div className="App">
      <h1>{car}</h1>
      <h1>{sportsCar}</h1>
      <h1>{truck}</h1>
      <h1>{plane}</h1>
      <br />
      <h1>And these are the Shorter ones</h1>
      <h1>{car2}</h1>
      <h1>{sportsCar2}</h1>
      <h1>{plane2}</h1>
    </div>
  );
}

export default App;
