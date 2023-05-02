import React from "react";
import "./App.css";
import TodoPage from "./pages/TodoPage";

const App = () => {

    return (
        <div id="todo-list">
            <h1>Todo List</h1>
            <TodoPage/>
        </div>
    );
};

export default App;