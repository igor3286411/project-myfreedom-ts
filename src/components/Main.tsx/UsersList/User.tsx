import React from "react";
import { UserProps } from "../../../types/user";

export const User: React.FC<UserProps> = ({ todo }) => {
    return (
        <tr key={todo.id}>
            <td>{todo.email}</td>
            <td>{todo.name}</td>
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