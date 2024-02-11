import { Dispatch } from "redux";
import axios from "axios";
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = (page = 1, search: string, sort: number) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      const apiUrl = search ? `https://test.gefara.xyz/api/v1/user/list?search=${search}` : `https://test.gefara.xyz/api/v1/user/list?page=${page}`
      const apiUserSort = `https://test.gefara.xyz/api/v1/user/list?page=${page}&orderBy=tokens%3A${sort === 1 ? 'desc' : 'asc'}`
      if (sort === 0 || search) {
        dispatch({ type: TodoActionTypes.FETCH_TODOS });
        const response = await axios.get(apiUrl);
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({ type: TodoActionTypes.FETCH_TODOS });
        const response = await axios.get(apiUserSort);
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
