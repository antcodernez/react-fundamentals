import "./todoButton.css"
function CreateTodoButton() {
    return (
        <button onClick={(event) => {
            console.log("Le diste click master")
            console.log(event)
            console.log(event.target)

        }}>+</button>
    );
}

export { CreateTodoButton};