import React from "react";
import { UserProps } from "../../../types/user";
import { useDispatch } from "react-redux";
import { TodoActionTypes } from "../../../types/todo";

export const User: React.FC<UserProps> = ({ todo, pages }: any) => {
    const dispatch = useDispatch();

    const handleChange = (id: any, email: string) => {
        dispatch({
            type: TodoActionTypes.SET_TRANSACTION,
            payload: {
                transaction: true,
                id,
                email,
            },
        });
    };

    const handleChangeDelete = (id: any) => {
        dispatch({
            type: TodoActionTypes.DELETE_USER,
            payload: { id, pages: pages }

        });
    };

    return (
        <tr key={todo.id}>
            <td className="click adaptiv-5" onClick={() => handleChange(todo.id, todo.email)}>{todo.email}</td>
            <td className="click" onClick={() => handleChange(todo.id, todo.email)}>{todo.name}</td>
            <td className="adaptiv-1">{todo.role}</td>
            <td className="adaptiv-2">{todo.subscription.plan.type}</td>
            <td className="adaptiv-3">{todo.subscription.tokens} TKN</td>
            <td className="adaptiv-4">
                <button className="corect"></button>
                <button className="delete" onClick={() => handleChangeDelete(todo.id)}></button>
            </td>
        </tr>
    );
}