import React from "react";
import "./style.css";

function TodoForm ()  {
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
    }}>
        <label>Escribe tu nuevo TODO</label>
        <textarea 
            placeholder="Agrega un nuevo todo"
        >
        </textarea>
        <div className="todo-form-btns-container">
            
            <button type="" 
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
