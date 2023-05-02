import React from "react";


const TodoForm = ({handleSubmit, text, setText}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button type="submit">Add Todo</button>
        </form>
    )

}

export default TodoForm;