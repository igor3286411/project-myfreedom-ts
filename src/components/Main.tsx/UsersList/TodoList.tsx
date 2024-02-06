import React, { useEffect } from 'react';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { Users } from './Users';

const TodoList: React.FC = () => {
    const { page, error, todos, limit } = useTypedSelector(state => state.todo)
    const { fetchTodos, setTodoPage } = useActions()
    const pages = [1, 2, 3, 4, 5]
    // const pages = []

    // for (let i = 1; i <= todos.length / 10; i++) {
    //     pages.push(i)
    // }

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            <Users todos={todos} />
            <div className='main__pages'>
                <div className='main__pages-full'>
                    <button className='main__pages-full-left' onClick={() => page !== 1 && setTodoPage(page - 1)}></button>
                    <div className='main__pages-full-num'>
                        {pages.map((p, i) =>
                            <button key={i}
                                onClick={() => setTodoPage(p)}
                                className={p === page ? 'active' : ''}
                            >
                                {p}
                            </button>
                        )}
                    </div>
                    <button className='main__pages-full-right' onClick={() => page !== pages.length && setTodoPage(page + 1)}></button>
                </div>
            </div>
        </>
    );
};

export default TodoList;
