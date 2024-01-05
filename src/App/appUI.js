import React from "react";
import { TodoCounter } from "../todoCounter";
import { TodoSearch } from "../todoSearch";
import { TodoList } from "../todoList";
import { CreateTodoButton } from "../todoButton";
import { TodoItem } from "../todoItem";
import { TodosLoading } from "../todosLoading";
import { TodosError} from "../todosError";
import { EmptyTodos } from "../emptyTodos";
import { TODOContext } from "../todoContext";
import { Modal } from "../modal";
import { TodoForm } from "../todoForm";

function AppUI () 
    {
        const { 
            openModal
        } = React.useContext(TODOContext);
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
            {/* dentro del modal, van todos los componentes que quiero mover entre nodos de html */}
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            </>
        );
    };

export { AppUI };
