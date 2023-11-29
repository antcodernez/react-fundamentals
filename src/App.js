import './App.css';
import { TodoCounter } from "./todoCounter";
import { TodoSearch } from "./todoSearch";
import { TodoList } from "./todoList";
import { TodoItem } from './todoItem';
import { CreateTodoButton } from './todoButton';


function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem text = {3}/>
        <TodoItem text = {4}/>
        <TodoItem text = {"Hola demonio"}></TodoItem>
      </TodoList>
 
     <CreateTodoButton />    
    </div>
  );
}

export default App;

