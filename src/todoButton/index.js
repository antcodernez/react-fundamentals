import React from "react";
import { TODOContext } from "../todoContext";
import "./todoButton.css"


function CreateTodoButton() {
    const { 
        openModal, setOpenModal
    } = React.useContext(TODOContext)
    return (
        // <button onClick={(event) => {
        //     console.log("Le diste click master")
        //     console.log(event)
        //     console.log(event.target)

        // }}>+</button>
        <button  onClick={() => setOpenModal(!openModal)}
            className="add-todo"
        >X</button>
    );
}

export { CreateTodoButton};