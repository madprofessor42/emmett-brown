import React from "react";


const TodoList = ({todos, toggleComplete, todoEditing, setTodoEditing, setEditingText, submitEdits, deleteTodo}) => {
    return (
        todos.map((todo) => (
            <div key={todo.id} className="todo">
                <div className="todo-text">
                    <input
                        type="checkbox"
                        id="completed"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                    />
                    {todo.id === todoEditing ? (
                        <input
                            type="text"
                            onChange={(e) => setEditingText(e.target.value)}
                        />
                    ) : (
                        <div>{todo.text}</div>
                    )}
                </div>
                <div className="todo-actions">
                    {todo.id === todoEditing ? (
                        <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
                    ) : (
                        <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
                    )}

                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            </div>
        ))
    )
}

export default TodoList;



