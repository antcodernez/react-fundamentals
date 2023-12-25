import { CompleteIcon} from "./completeIcon"
import { DeleteIcon} from "./deleteIcon"
import "./todoItem.css"

// className me indica que es xml
function TodoItem(props) {
    return (
      <li className='TodoItem'>
        {/* <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}
        >V</span> */}
        <CompleteIcon />        
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        {/*         
        <span className="Icon Icon-delete"
        onClick={props.onDelete}
        >X</span> */}
        
        <DeleteIcon />
      </li>
    );
  }
  
export { TodoItem };