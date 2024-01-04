import React from 'react';
import {AppUI} from "./appUI"
import { TODOProvider } from '../todoContext';

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
  return (          
    <TODOProvider>
      asi el componente appUI va a tener acceso a toda la informacion que tenga en el contexto
       <AppUI />
    </TODOProvider>
  );
}
export default App;
