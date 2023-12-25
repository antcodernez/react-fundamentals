
import { TodoIcon } from "./todoIcon";
function DeleteIcon({onDelete}) {
    return (
        <TodoIcon
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    )
}

export {
    DeleteIcon
}