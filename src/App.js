import './App.css';

function App(props) {
  const cars = props.cars
  return (
    <div className="App">
      <h1>Garadge</h1>
      {cars.length > 0 &&
        <h1>You have {cars.length} Cars in Ya Garadge</h1>
      }
        {cars.length > 0 ?
          <h1>You have {cars.length} Cars in ya Gardge (second If)</h1>
          : <>ddd (second if)</>
        }
    </div>
  );
}

export default App;
