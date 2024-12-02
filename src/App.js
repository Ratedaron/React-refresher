import './App.css'

class Car {
  constructor(name) {
    this.name = name;
  }
  presentCarName() {
    return this.name
  }
}

class Mod extends Car {
  constructor(name, type) {
    super(name)
    this.type = type
  }
  show() {
    return 'I have a ' + this.presentCarName() + ', its a ' + this.type
  }
}

const myCar = new Mod("Lambo", "vuera")

function App() {
  return (
    <div className="App">
      <h1>{myCar.show()}</h1>
    </div>
  );
}


export default App