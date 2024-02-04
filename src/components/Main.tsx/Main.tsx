import { Form } from "./Form"
import TodoList from "./TodoList"
import "./main.scss"

export const Main = () => {
    return (
        <>
            <div className="main__my-organization">
                <h2>Моя организация</h2>
            </div>
            <section className="main">
                <Form />
                <TodoList />
            </section>
        </>
    )
}