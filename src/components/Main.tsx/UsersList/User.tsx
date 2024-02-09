import React from "react";
import { UserProps } from "../../../types/user";
import { useDispatch } from "react-redux";
import { TodoActionTypes } from "../../../types/todo";

export const User: React.FC<UserProps> = ({ todo }: any) => {
    const dispatch = useDispatch();

    const handleChange = (id: any) => {
        dispatch({
            type: TodoActionTypes.SET_TRANSACTION,
            payload: {
                transaction: true,
                id: id
            },
        });
    };

    return (
        <tr key={todo.id}>
            <td>{todo.email}</td>
            <td className="click" onClick={() => handleChange(todo.id)}>{todo.name}</td>
            <td>{todo.role}</td>
            <td>{todo.subscription.plan.type}</td>
            <td>{todo.subscription.tokens} TKN</td>
            <td>
                <button className="corect"></button>
                <button className="delete"></button>
            </td>
        </tr>
    );
}