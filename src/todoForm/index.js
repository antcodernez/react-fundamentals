import React from "react";
import {TODOContext} from "../todoContext";
import "./style.css";

function TodoForm ()  {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TODOContext);

    const onSubmit = e => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }
    const onCancel = e => {
        setOpenModal(false);
    }
    //Voy a crear un stado local
    const [newTodoValue, setnewTodoValue] = React.useState("");

    const onChange = e => {
        setnewTodoValue(e.target.value);
    };

    return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea 
            placeholder="Agrega un nuevo todo"
            value={newTodoValue}
            onChange={onChange}
            required
        >
        </textarea>
        <div className="todo-form-btns-container">
            
            <button 
                type="button"
                onClick={onCancel} 
                className="btn todo-form-btn--cancel">Cancel
            </button>
            
            <button type="submit"
                className="btn todo-form-btn--add">Add
            </button>

        </div>
    </form>      
  )
}

export {TodoForm} 
