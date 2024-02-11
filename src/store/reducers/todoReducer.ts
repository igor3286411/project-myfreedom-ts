import {TodoAction, TodoActionTypes, TodoState, TodoStateTransaction, TodoStateUsers} from "../../types/todo";

const initialState: TodoState = {
    todos: {} as TodoStateUsers,
    page: 1,
    error: null,
    search: '',
    loading: false,
    transactions: {
        transaction: false,
        id: "",
        email: "",
    } as TodoStateTransaction,
    sort: 0,
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        case TodoActionTypes.SET_SEARCH:
            return {...state, search: action.payload}
        case TodoActionTypes.SET_TRANSACTION:
            return {...state, transactions: action.payload}
        case TodoActionTypes.SORT_USERS:
            return {...state, sort: action.payload}
        case TodoActionTypes.DELETE_USER:
            return { ...state, todos: {data: state.todos.data.filter((user : any) => user.id !== action.payload.id), pages: action.payload.pages} };
        default:
            return state
    }
}
