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
            <div className="main__my-organization">
                <h2>Моя организация</h2>
            </div>
            <section className="main">
                <Form />
                <TodoList />
            </section>
            {transaction && <Transaction />}
        </>
    )
}