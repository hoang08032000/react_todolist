import { createContext, useState } from "react";

export const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([
        { id: "1", task: "c1", status: false },
        { id: "2", task: "c2", status: true },
        { id: "3", task: "c3", status: false },
        { id: "4", task: "c4", status: false },
    ]);
    return (
        <TodoContext.Provider value={{ todoList, setTodoList }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
