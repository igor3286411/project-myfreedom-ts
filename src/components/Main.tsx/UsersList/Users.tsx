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
                        <th className="adaptiv-5">Email</th>
                        <th>Имя</th>
                        <th className="adaptiv-1">Роль</th>
                        <th className="adaptiv-2">Подписка</th>
                        <th className="adaptiv-3">Токены <button> </button></th>
                        <th className="adaptiv-4">Действия</th>
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