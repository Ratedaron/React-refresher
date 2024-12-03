import './App.css';

const person = {
  hobbies: ["reading", "hiking", "coding"],
  lastName: "Doe",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001"
  },
  age: 30,
  isEmployed: true,
  firstName: "John",
  greet: function () {
    return `Hello, my name is ${this.firstName} ${this.lastName}.`;
  }
};

function returnPersonInfo({ firstName, lastName, age, hobbies, address: { street } }) {
  return `This person is called ${firstName} ${lastName}, is ${age} years old, likes to do ${hobbies[0]}, and lives on ${street}.`;
}

function App() {
  const message = returnPersonInfo(person);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
