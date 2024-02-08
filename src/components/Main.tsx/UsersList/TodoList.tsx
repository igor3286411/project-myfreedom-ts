import React, { useEffect } from 'react';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { Users } from './Users';

const TodoList: React.FC = () => {
    const { page, error, todos, limit } = useTypedSelector(state => state.todo)
    const { fetchTodos, setTodoPage } = useActions()
    const pagesNumber = []
    const { data, pages }: any = todos

    for (let i = 1; i <= pages; i++) {
        pagesNumber.push(i)
    }

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (error) {
        return <h1>{error}</h1>
    }
    console.log(data);
    

    if (data) {
        return (
            <>
                <Users todose={data} />
                <div className='main__pages'>
                    <div className='main__pages-full'>
                        <button className='main__pages-full-left' onClick={() => page !== 1 && setTodoPage(page - 1)}></button>
                        <div className='main__pages-full-num'>
                            {pagesNumber.map((p, i) =>
                                <button key={i}
                                    onClick={() => setTodoPage(p)}
                                    className={p === page ? 'active' : ''}
                                >
                                    {p}
                                </button>
                            )}
                        </div>
                        <button className='main__pages-full-right' onClick={() => page !== pages && setTodoPage(page + 1)}></button>
                    </div>
                </div>
            </>
        );
    }
};

export default TodoList;
