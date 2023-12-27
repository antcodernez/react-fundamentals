import React from "react";
import "./todoSearch.css";

function TodoSearch({
  searchValue,
  setSearchValue
}) {
    // const [searchValue, setSearchValue] = React.useState('');
    // useState(''); me permite definir un estado inicial en este caso es un string vacio pero puede ser lo que yo quiera

    // Se esta usando un array porque el estado no solo se consume sino que tambien se actualiza y no puedo actualzarlo porque el estado de reactJS es inmutable

    //primer elemento que se rescibe es el estado
    //Funcion actualizadora de estado

    //Necesito una funcion actualizadora del estado, controlada por react js para que se puedan hacer los procesos de inmutabilidad y no afecte el historial de estados de mi componente
    
    return ( 
      <input 
        placeholder="Search a task" 
        tabIndex={1}
        value={searchValue}
        onChange={(event) => {
          //console.log("Escribiste en el todo search");
          // console.log(event);
          //console.log(event.target.value);
          setSearchValue(event.target.value);
        }}
      >

      </input>
    );
  }

export { TodoSearch };