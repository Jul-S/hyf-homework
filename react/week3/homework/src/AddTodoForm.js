import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";

function AddTodoForm(props) {

    return <form id="add-todo" onSubmit={props.onSubmit}>
        <div>
            <label htmlFor="todo_desc">Todo description</label>
            <input id="todo_desc"
                type="text"
                placeholder="Create a new todo"
                value={props.inputValue}
                onChange={props.onChange} />
        </div>
        <div>
            <label htmlFor="todo_date">Deadline</label>
            <DatePicker id="todo_date"
                selected={props.date}
                dateFormat='yyyy-MM-dd'
                onChange={(date) => props.onChange(date)}
                minDate={props.date} />
        </div>
        <input type="submit" value="Add ToDo" disabled={!props.inputValue} />
    </form>
}

AddTodoForm.propTypes = {
    inputValue: PropTypes.string,
    date: PropTypes.instanceOf(Date)
}

export default AddTodoForm;