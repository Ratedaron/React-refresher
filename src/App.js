import './App.css';

const myArray = ['Apple', 'Melon', 'Frutituti', 'Cornflakes'];
const myArrayOfHeaders = ['Welcome', 'to', 'my', 'World'];

const myList = myArray.map((item, index) => <p key={index}>{item}</p>);
const myIndexedList = myArrayOfHeaders.map((item, index) => <p key={index}>{item}</p>);

function App() {
  return (
    <div className="App">
      <h1 className="index">{myIndexedList}</h1>
      <h1>{myList}</h1>
    </div>
  );
}

export default App;
