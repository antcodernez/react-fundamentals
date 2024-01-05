import React from "react";
import { createPortal } from "react-dom";
import { CreateTodoButton } from "../todoButton";
import "./modal.css"


function Modal({children}) 
    {
        return createPortal(
            <div className="modal">
                {children}
                <CreateTodoButton></CreateTodoButton>
            </div>,
            document.getElementById("modal-xd")
        )
    } 

export { Modal }