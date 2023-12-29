import { TodoCounter } from "../todoCounter";
import { TodoSearch } from "../todoSearch";
import { TodoList } from "../todoList";
import { CreateTodoButton } from "../todoButton";
import { TodoItem } from "../todoItem";
import { TodosLoading } from "../todosLoading";
import { TodosError} from "../todosError";
import { EmptyTodos } from "../emptyTodos";

function AppUI ({totalTODOs, completedTODOs, searchValue, setSearchValue, searchedTODOs, completeTODO, deleteTODO,
    loading, error}) 
    {
    
        return (
            <>
            <TodoCounter total={totalTODOs} completed={completedTODOs} />

            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoList>
                {loading && <TodosLoading/>}

                {error && <TodosError/>}
                
                {(!loading && searchedTODOs.length === 0) && <EmptyTodos/>}

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
