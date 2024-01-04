import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TODOContext = React.createContext();

function TODOProvider({children}) 
    {
        // aqui va la logica de mi app 
        const {item:todos, saveItem:saveTODOs, loading, error} = useLocalStorage("TODOS_V1", []);
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

        return(
            <TODOContext.Provider value={{
                totalTODOs, completedTODOs, searchValue, setSearchValue, searchedTODOs, completeTODO, deleteTODO,
                loading, error
            }}> 
                {children}
            </TODOContext.Provider>
        );
    }
//Todo lo que este dentro de value={} lo voy a poder exponer globalmente en el contexto de mi app

// Existen dos componentes en el contexto: Provider y Consumer. El Provider es el componente que almacena y proporciona el valor, mientras que el Consumer es el componente que permite consumir los datos.

// Existen dos formas de acceder al valor del Provider:

// Usando el hook useContext()
// Usando el componente Consumer.

//  

export { TODOContext, TODOProvider }