import React from "react";
import { CompleteIcon } from "../todoIcon/completeIcon"
import { DeleteIcon } from "../todoIcon/deleteIcon"
import "./todoItem.css"

// className me indica que es xml
function TodoItem(props) {
    return (
      <li className='TodoItem'>

        <CompleteIcon 
         completed={props.completed}
         onComplete={props.onComplete}
        
        />          
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        
        <DeleteIcon 
          onDelete={props.onDelete}
        />

      </li>

    );
  }
  
export { TodoItem };