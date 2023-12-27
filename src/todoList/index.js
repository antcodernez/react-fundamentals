import "./todoList.css";

function TodoList({children}) {
    return (
      <ul>
        { children } 
      </ul>
    );
  }

export { TodoList }


// { props.children } // esta linea me va a permitir que los TodoItems se rendericen en el componente TodoList