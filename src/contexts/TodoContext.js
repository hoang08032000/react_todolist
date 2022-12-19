import { createContext, useState } from "react";

export const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([
        { id: "j8xxg", task: "c1", status: false },
        { id: "5hc2h", task: "c2", status: true },
        { id: "0a7vt", task: "c3", status: false },
        { id: "5vj6w", task: "c4", status: false },
    ]);
    return (
        <TodoContext.Provider value={{ todoList, setTodoList }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
