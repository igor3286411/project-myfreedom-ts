import React, { useState } from "react"
import { User } from "./User"
import { useDispatch } from "react-redux";
import { TodoActionTypes } from "../../../types/todo";


interface UsersProps {
    users: any[],
    pages: number
}

export const Users: React.FC<UsersProps> = ({ users, pages }) => {
    const dispatch = useDispatch();
    const [sort, setSort] = useState(0)

    const clickSortDown = () => {
        setSort(1)
        dispatch({
            type: TodoActionTypes.SORT_USERS,
            payload: 1,
        });
    }

    const clickSortTop = () => {
        setSort(2)
        dispatch({
            type: TodoActionTypes.SORT_USERS,
            payload: 2,
        });
    }

    return (
        <div>
            <table className="main__table">
                <thead>
                    <tr>
                        <th className="adaptiv-5">Email</th>
                        <th>Имя</th>
                        <th className="adaptiv-1">Роль</th>
                        <th className="adaptiv-2">Подписка</th>
                        <th className="adaptiv-3">Токены <button
                            onClick={sort === 0 || sort === 2 ? () => clickSortDown() : () => clickSortTop()}
                            className={sort === 1 ? "sort-top" : "sort-down"}></button></th>

                        <th className="adaptiv-4">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((todo: any) =>
                        <User todo={todo} key={todo.id} pages={pages} />
                    )}
                </tbody>
            </table>
        </div>
    )
}