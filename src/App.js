import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button";

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
  return (
    <div className="App" style={{backgroundColor: "lightblue", color: "darkslategray", padding: 10}}>
        <h1>{data.app_name}</h1>
        <Button />
        <Button />
        <Paragraph />
        <UserList />
        <ul>{userNames}</ul>
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
