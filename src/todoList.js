function TodoList(props) {
    return (
      <ul>
        { props.children } 
      </ul>
    );
  }

export { TodoList }


// { props.children } // esta linea me va a permitir que los TodoItems se rendericen en el componente TodoList