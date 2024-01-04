//Tenemos que pasar las propiedades css como objetos en jsx
// const styles = {
//   backgroundColor: "red",
// };

// function TodoCounter({total, completed}) {
//     return (
//       <h1 style={styles}>
//         Haz completado {completed} de {total} TODO's
//       </h1>
//     );
//   }

//Styles dentro del componente

// function TodoCounter({total, completed}) {
//     return (
//       <h1 style={{
//         fontSize: "24px",
//         textAlign: "center",
//         margin: 0,
//         padding: 48
//         // puedo poner el valor de la propiedad sin un valor, si voy a usar medidas relativas debo usar strings; "45vh" 
//       }}>
//         Haz completado {completed} de {total} TODO's
//       </h1>
//     );
//   }

//Styles desde una hoja de estilos
// import "./todoCounter.css";

// function TodoCounter({total, completed}) {
//     let message = `Haz completado <span>${completed}</span> de <span>${total}</span> TODO's`; 
//     let message1 = `Felicidades lo lograste 👻, terminaste todos los TODO's`; 
    
//     return (
//       <h1>{total === completed ? message1 : message}</h1>
//     );
//   }

// export {
//     TodoCounter
// };

import React from 'react';
import './todoCounter.css';
import {TODOContext} from "../todoContext/index";

function TodoCounter() {
  const {
    totalTODOs, completedTODOs
  } = React.useContext(TODOContext);

  let message = (
    <span>
      Haz completado <strong>{completedTODOs}</strong> de <strong>{totalTODOs}</strong> TODO's
    </span>
  );
  let message1 = <span>Felicidades lo lograste 👻, terminaste todos los TODO's</span>;

  return <h1>{ totalTODOs === completedTODOs  ? message1 : message }</h1>;
}

export { TodoCounter };
