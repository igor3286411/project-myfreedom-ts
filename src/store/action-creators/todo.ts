import { Dispatch } from "redux";
import axios from "axios";
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = (page = 1, search: string) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      if (search) {
        const response = await axios.get(
          `https://test.gefara.xyz/api/v1/user/list?search=${search}`
        );
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }
      if (!search) {
        dispatch({ type: TodoActionTypes.FETCH_TODOS });
        const response = await axios.get(
          `https://test.gefara.xyz/api/v1/user/list?page=${page}`
        );
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
}
