import './App.css';
import { TodoCounter } from "./todoCounter";
import { TodoSearch } from "./todoSearch";
import { TodoList } from "./todoList";
import { TodoItem } from './todoItem';
import { CreateTodoButton  } from './todoButton';
import React from 'react';

const defaultTodos = [
  {
    text: "comprar weed",
    completed: true
  },
  {
    text: "Ir de putas",
    completed: false
  },
  {
    text: "Debrayar con la pantilla",
    completed: false
  },
  {
    text: "Un wey tumbado",
    completed: true
  },
  
];
// Por cada elemento(objeto) de mi array voy a renderizar un todo item

// function App() {
//   return (
//     <React.Fragment>

//       <TodoCounter total={4} completed={1}/>
//       <TodoSearch />

//       <TodoList>
//         {/* <TodoItem text = {3} />
//         <TodoItem text = {4} />
//         <TodoItem text = {"Hola demonio"}></TodoItem> */}
//         {defaultTodos.map(todo => {

//         })} 
//         {/* .map() me esta retornando un nuevo array, no itera como forEach */}
//         {[<TodoCounter/>, <TodoList/>]}
//       </TodoList>
 
//      <CreateTodoButton />    
//     </React.Fragment>
//   );   
// }

function App() {
  return (
    <>
      <TodoCounter total={4} completed={1} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}
export default App;

