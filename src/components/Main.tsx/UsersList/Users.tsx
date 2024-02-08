import React from "react"
import { User } from "./User"


interface UsersProps {
    todose: any[]
}

export const Users: React.FC<UsersProps> = ({ todose }: any) => {

    console.log(todose);
    
    return (
        <div>
            <table>
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
                    {todose.map((todo : any) =>
                        <User todo={todo} key={todo.id} />
                    )}
                </tbody>
            </table>
        </div>
    )
}