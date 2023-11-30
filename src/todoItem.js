// className me indica que es xml
function TodoItem(props) {
    return (
      <li className='daddy' >
        <span>V</span>
        <p className='aver'>{props.text}</p>
        <span>X</span>
      </li>
    );
  }

  
export { TodoItem };