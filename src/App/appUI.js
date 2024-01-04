import { TodoCounter } from "../todoCounter";
import { TodoSearch } from "../todoSearch";
import { TodoList } from "../todoList";
import { CreateTodoButton } from "../todoButton";
import { TodoItem } from "../todoItem";
import { TodosLoading } from "../todosLoading";
import { TodosError} from "../todosError";
import { EmptyTodos } from "../emptyTodos";
import { TODOContext } from "../todoContext";

function AppUI () 
    {
    
        return (
            <>
            <TodoCounter/>
            <TodoSearch/>
            <TODOContext.Consumer>
                {({
                    loading,
                    error,
                    searchedTODOs,
                    completeTODO,
                    deleteTODO
                }) => (
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
                )}
                {/* usando las render functions */}
            </TODOContext.Consumer>
           
            <CreateTodoButton />
            </>
        );
    };

export { AppUI };
