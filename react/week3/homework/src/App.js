import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import Counter from './Counter';
import AddTodoForm from './AddTodoForm';
import fetchTodos from './fetchTodos';

function App() {
  const [todos, setTodos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [inputAddTodotext, setInputAddTodotext] = useState('');
  const [dateOfDatepicker, setDateOfDatepicker] = useState(new Date());

  const handleAddToDoFormChange = (event) => {
    if (event instanceof Date) {
      setDateOfDatepicker(event);
    } else {
      setInputAddTodotext(event.target.value);
    }
  }

  const handleSubmitNewTodo = (event) => {
    const newTodos = todos.concat({ id: getLastId(), description: inputAddTodotext, deadline: dateOfDatepicker.toISOString().split('T')[0] });
    setTodos(newTodos);
    setInputAddTodotext('');
    event.preventDefault();
  }

  function handleRemove(id) {
    const newTodos = todos.filter((aTodo) => aTodo.id !== id);
    setTodos(newTodos);
  }

  function handleSubmitUpdate(id, text) {
    const newTodos = todos.map(aToDo => aToDo.id === id ? { ...aToDo, description: text } : aToDo);
    setTodos(newTodos);
  }

  function getLastId() {
    return todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
  }

  useEffect(() => {
    setIsLoading(true);
    fetchTodos()
      .then((data) => setTodos(data))
      .catch(err => setIsError(true));
    setIsLoading(false);
  }, []);

  return <div>
    <h1>ToDo List</h1>
    <Counter />
    <AddTodoForm
      onChange={handleAddToDoFormChange}
      onSubmit={handleSubmitNewTodo}
      inputValue={inputAddTodotext}
      date={dateOfDatepicker} />
    {isError && (<div>Something went wrong...</div>)}
    {isLoading && (<div>Loading...</div>)}
    <TodoList
      todos={todos}
      isError={isError}
      onRemove={handleRemove}
      onSubmitUpdate={handleSubmitUpdate} />
  </div>
}

export default App;
