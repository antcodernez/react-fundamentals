import { TodoCounter } from "./todoCounter";
import { TodoSearch } from "./todoSearch";
import { TodoList } from "./todoList";
import { TodoItem } from './todoItem';
import { CreateTodoButton  } from './todoButton';
import React from 'react';

const defaultTodos = [
  {
    text: "comprar weed",
    completed: false
  },
  {
    text: "Ir por holes",
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
  {
    text: "Usar estados derivados",
    completed: true
  },
  {
    text: "Un pinche toque también",
    completed: false
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
  
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log("Los usuarios buscan TODOS de: " + searchValue);

  const completedTODOs = todos.filter(
    todo => !!todo.completed
    // la doble negacion va a convertir a booleano cualquier cosa que me devuelca todo.completed

    // Si todo.completed tiene algo que de positivo(string, array, objeto lo que sea)
  ).length;

  const totalTODOs = todos.length;

  const searchedTODOs = todos.filter(element => {
    // función texto sin tildes
      const noTildes = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };
    
      // Normalizando texto sin tildes y a Lower Case
      const concidenciasTODOs = noTildes(element.text.toLowerCase());
      const searchValueLowerCase = noTildes(searchValue.toLowerCase());

      return concidenciasTODOs.includes(searchValueLowerCase);
  });
  return (          
    <>
      <TodoCounter 
        total={totalTODOs} 
        completed={completedTODOs} 
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue} 
      />
      <TodoList>
        {searchedTODOs.map( todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}
export default App;
