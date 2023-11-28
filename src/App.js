import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoItem text = {3}/>
      <TodoItem text = {"Hola demonio"}></TodoItem>
      <TodoItem text = {"Este es un prop que es usado para darle más dinamismo a mis componentes en react al parecer xd, es una propiedad de mi componente"}></TodoItem>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola hijos de perra desde react <code>src/App.js</code> y guarda para recargar.
        </p> 
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// className me indica que es xml

function TodoItem(props) {
  return (
    <li className='daddy'>
      <span>V</span>
      <p className='aver'>{props.text}</p>
      <span>X</span>
    </li>
  );
}
export default App;

