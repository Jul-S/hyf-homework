import { useState } from 'react';

function TodoItem(props) {
    const [checked, setChecked] = useState(false);

    return (
        <li>
            <label htmlFor={props.radioId} className={checked ? 'complete' : ''}>{props.text}</label>
            <input id={props.radioId} onClick={() => setChecked(!checked)} type='checkbox' name='todos' />
            <button onClick={props.onRemove}>Delete</button>
        </li>
    )
}

export default TodoItem;