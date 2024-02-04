import React, { useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const TodoList: React.FC = () => {
    const { page, error, loading, todos, limit } = useTypedSelector(state => state.todo)
    const { fetchTodos, setTodoPage } = useActions()
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map((todo, i) =>
                <div key={todo.id}>{i + 1} - {todo.name}</div>
            )}
            <div style={{ display: "flex" }}>
                {pages.map((p, i) =>
                    <div key={i}
                        onClick={() => setTodoPage(p)}
                        style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;