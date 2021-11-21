
import TodoItem from './TodoItem';

function TodoList(props) {
    const { todos, isError, onRemove, onSubmitUpdate } = props;

    return (
        <ul>
            {(!isError && todos.length < 1) ? 'No items' :
                todos.map((aTodo) =>
                    <TodoItem
                        key={aTodo.id}
                        text={aTodo.description}
                        date={aTodo.deadline}
                        onRemove={() => onRemove(aTodo.id)}
                        onSubmitUpdate={(newDesc) => onSubmitUpdate(aTodo.id, newDesc)}
                    />)}
        </ul>
    )
}

export default TodoList;

