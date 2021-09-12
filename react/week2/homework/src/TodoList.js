import { useState } from 'react';
import Counter from './Counter'
import TodoItem from './TodoItem'
import getTodos from './getTodos'

function TodoList() {
    const [todos, updateTodos] = useState(getTodos());
    console.log(todos);

    function addRandomTodo(todos, updateTodos) {
        const newTodos = todos.concat({ id: generateUniqeId(), description: 'random todo' });
        updateTodos(newTodos);
    }

    function handleRemove(id) {
        const newTodos = todos.filter((aTodo) => aTodo.id !== id);
        updateTodos(newTodos);
    }

    function generateUniqeId() {
        return Math.random().toString(36).substr(2, 9);
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <Counter />
            <button onClick={() => addRandomTodo(todos, updateTodos)}>Add todo</button>
            <ul>
                {todos.map((aTodo) => <TodoItem key={generateUniqeId()} radioId={aTodo.id} text={aTodo.description} onRemove={() => handleRemove(aTodo.id)} />)}
            </ul>
        </div >
    )
}

export default TodoList;

