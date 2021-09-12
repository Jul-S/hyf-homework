function TodoItem(props) {
    return (
        <li>
            <button onClick={props.onRemove}>Delete</button>
            <input id={props.radioId} value={props.text} type='checkbox' name='todos' />
            <label htmlFor={props.radioId}>{props.text}</label>
        </li>
    )
}

export default TodoItem;