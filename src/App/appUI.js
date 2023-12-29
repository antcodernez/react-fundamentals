import { TodoCounter } from "../todoCounter";
import { TodoSearch } from "../todoSearch";
import { TodoList } from "../todoList";
import { CreateTodoButton } from "../todoButton";
import { TodoItem } from "../todoItem";
import "./app.css"
function AppUI ({totalTODOs, completedTODOs, searchValue, setSearchValue, searchedTODOs, completeTODO, deleteTODO,
laoding, error}) 
    {
        return (
            <>
            <TodoCounter total={totalTODOs} completed={completedTODOs} />

            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoList>
                {laoding && <p className="text-normal">Loading...</p>}

                {error && <p className="text-normal">Hubo un error perror!!!</p>}
                
                {(laoding && searchedTODOs.length === 0) && <p className="text-normal">Make your first to do 🥰💥!!!</p>}

                {searchedTODOs.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTODO(todo.text)}
                        onDelete={() => deleteTODO(todo.text)}
                    />
                    ))}
            </TodoList>
            <CreateTodoButton />
            </>
        );
    };

export { AppUI };