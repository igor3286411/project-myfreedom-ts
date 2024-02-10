export interface TodoStateUsers {
  data: any[];
  pages: number;
}

export interface TodoStateTransaction {
  transaction: boolean
  id: string;
  email: string;
}


export interface TodoState {
  todos: TodoStateUsers;
  loading: boolean;
  error: null | string;
  page: number;
  search: string;
  transactions: any;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
  SET_SEARCH = "SET_SEARCH",
  SET_TRANSACTION = "SET_TRANSACTION",
}
interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS;
}
interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: TodoStateUsers;
}
interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}
interface SetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}
interface SetSearch {
  type: TodoActionTypes.SET_SEARCH;
  payload: string;
}
interface SetTransaction {
  type: TodoActionTypes.SET_TRANSACTION;
  payload: boolean;
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoErrorAction
  | FetchTodoSuccessAction
  | SetTodoPage
  | SetSearch
  | SetTransaction;
