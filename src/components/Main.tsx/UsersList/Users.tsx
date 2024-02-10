import React from "react"
import { User } from "./User"


interface UsersProps {
    users: any[],
    pages: number
}

export const Users: React.FC<UsersProps> = ({ users, pages }) => {
    
    return (
        <div>
            <table className="main__table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Имя</th>
                        <th>Роль</th>
                        <th>Подписка</th>
                        <th>Токены <button> </button></th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((todo : any) =>
                        <User todo={todo} key={todo.id} pages={pages}/>
                    )}
                </tbody>
            </table>
        </div>
    )
    
}