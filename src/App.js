import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button";
import CountInfo from "./Components/ClickInfo";
import {useState} from "react";

const data = {
    app_name: "Ash's react practice",
}

const userData = [
    { id: 1, name: "Sally McSally", age: 49 },
    { id: 2, name: "Brendan", age: 8 },
    { id: 3, name: "Sasha", age: 25 }
]

const userNames = userData.map(user => <li key={user.id}>{user.name}</li>);

function App() {

  const [infoCount, setInfoCount] = useState(0);

  function IncreaseInfoCount() {
      setInfoCount(infoCount + 1);
  }

  return (
    <div className="App" style={{backgroundColor: "lightblue", color: "darkslategray", padding: 10}}>
        <h1>{data.app_name}</h1>
        <CountInfo handleClick={IncreaseInfoCount} count={infoCount}/>
        <Button />
        <Button />
        <Paragraph />
        <UserList />
        <ul>{userNames}</ul>
        <CountInfo handleClick={IncreaseInfoCount} count={infoCount}/>
    </div>
  );
}

function Paragraph() {
    return (
        <p>Hello world</p>
    )
}

function UserList() {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Age Range</th>
            </tr>
            {users}
        </table>
    );
}

const users = userData.map(user =>
    <tr>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.age > 17 ? 'Adult': 'Child'}</td>
    </tr>
);

export default App;
