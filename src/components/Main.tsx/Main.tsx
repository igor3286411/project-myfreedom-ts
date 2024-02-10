import { useTypedSelector } from "../../hooks/useTypedSelector"
import { Form } from "./Form"
import { Transaction } from "../Transaction/Transaction"
import TodoList from "./UsersList/TodoList"
import "./main.scss"

export const Main = () => {
    const { transactions } = useTypedSelector(state => state.todo)
    const { transaction } = transactions

    return (
        <>
            <div className={transaction ? "main__my-organization open-transaction" : "main__my-organization"}>
                <h2>Моя организация</h2>
            </div>
            <section className={transaction ? "main open-transaction" : "main"}>
                <Form />
                <TodoList />
            </section>
            {transaction && <Transaction />}
        </>
    )
}