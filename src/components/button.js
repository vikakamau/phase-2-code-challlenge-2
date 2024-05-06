import { deleteBotById } from "../fetch";
function Button({ id, onDelete }) {
    function handleClick() {
        deleteBotById(id)
        .then(data => {
            onDelete(id);
        })
        .catch(error => (error))
    }

    return (
        <button onClick={handleClick} className="btn btn-danger">X</button>
    );
}

export default Button;
