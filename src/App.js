import { useRoutes } from "react-router-dom";
import router from "~/router";
import TodoContextProvider from "./contexts/TodoContext";
import ThemeProvider from "./theme";

function App() {
    const routes = useRoutes(router);
    return (
        <ThemeProvider>
            <TodoContextProvider>{routes}</TodoContextProvider>
        </ThemeProvider>
    );
}

export default App;
