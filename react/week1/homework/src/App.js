import './App.css';

const todos = [
  {
    id: 1,
    description: 'Get out of bed',
    date: 'Wed Sep 13 2021',
  },
  {
    id: 2,
    description: 'Brush teeth',
    date: 'Thu Sep 14 2021',
  },
  {
    id: 3,
    description: 'Eat breakfast',
    date: 'Fri Sep 15 2021',
  }
];

function TodosTable(props) {
  return <div>
    <h1>ToDos List:</h1>
    <ul>
      {todos.map(aTodo => <TodosTableRow text={aTodo.description} date={aTodo.date} />)}
    </ul>
  </div>;
}

function TodosTableRow(props) {
  return <li>
    <p>{props.text}, {props.date}</p>
  </li>;
}

function App() {
  return (
    <div className="App">
      <TodosTable />
    </div>
  );
}

export default App;
