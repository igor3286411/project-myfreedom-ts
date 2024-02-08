import { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoActionTypes } from "../../types/todo";

export const Form = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const onChangeSearch = (e: any) => {
        setSearch(e.target.value);

        dispatch({
            type: TodoActionTypes.SET_SEARCH,
            payload: e.target.value,
        });
    };

    return (
        <div className="form">
            <h2>Пользователи</h2>
            <form className="form__input">
                <button type="submit"></button>
                <input type="text" placeholder="Поиск" value={search} onChange={onChangeSearch} />
            </form>
        </div>
    )
}