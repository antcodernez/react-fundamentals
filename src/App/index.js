import React from 'react';
import { useLocalStorage } from "./useLocalStorage";
import {AppUI} from "./appUI"

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

// localStorage.setItem("TODOS_V1", defaultTodos);
//localStorage.removeItem("TODOS_V1");

//Cuando creo un hook es buena practica declararlo con un use



function App() {
 
  const {item:todos, saveItem:saveTODOs, laoding, error} = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState('');

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

  //Vamos a crear la funcion actualizadora del estado
  const completeTODO = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);
     
    newTodos[index].completed  = true;
    saveTODOs(newTodos)
  }
  const deleteTODO = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(index, 1);
    saveTODOs(newTodos)
  }

 
  return (          
    <AppUI 
    error={error}
    laoding={laoding}
    totalTODOs={totalTODOs} 
    completedTODOs={completedTODOs} 
    searchValue={searchValue} 
    setSearchValue={setSearchValue} 
    searchedTODOs={searchedTODOs} 
    completeTODO={completeTODO} 
    deleteTODO={deleteTODO}/>

  );
}
export default App;
