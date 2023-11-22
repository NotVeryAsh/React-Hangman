import logo from './logo.svg';
import './App.css';

const data = {
    app_name: "Ash's react practice",
}

function App() {
  return (
    <div className="App" style={{backgroundColor: "lightblue", color: "darkslategray", padding: 10}}>
        <h1>{data.app_name}</h1>
        <MyButton />
        <Paragraph />
    </div>
  );
}

function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

function Paragraph() {
    return (
        <p>Hello world</p>
    )
}

export default App;
