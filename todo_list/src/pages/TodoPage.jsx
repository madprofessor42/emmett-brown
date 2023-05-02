import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";


const TodoPage = () => {
    const [todos, setTodos] = React.useState([]);
    const [text, setText] = React.useState("");
    const [todoEditing, setTodoEditing] = React.useState(null);
    const [editingText, setEditingText] = React.useState("");

    React.useEffect(() => {
        const json = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(json);
        if (loadedTodos) {
            setTodos(loadedTodos);
        }
    }, []);

    React.useEffect(() => {
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
    }, [todos]);

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setText("");
    }

    function deleteTodo(id) {
        let updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    function toggleComplete(id) {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    function submitEdits(id) {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.text = editingText;
            }
            return todo;
        });
        setTodos(updatedTodos);
        setTodoEditing(null);
    }


    return (
        <>
            <TodoForm handleSubmit={handleSubmit} text={text} setText={setText}/>
            <TodoList todos={todos}
                      todoEditing={todoEditing} setTodoEditing={setTodoEditing} setEditingText={setEditingText}
                      submitEdits={submitEdits} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
        </>
    )
}

export default TodoPage;