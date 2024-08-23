import { ActionTypes } from "../actionTypes/todoTypes";

const initialState = {
    todos: [],
    category: [],
    isEmpty: true,
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            const tempTodos = state.todos.concat(action.payload);
            return { ...state, todos: tempTodos };
        case ActionTypes.REMOVE_TODO:
            const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload)
            return { ...state, todos: filteredTodos };
        case ActionTypes.EDIT_TODO:
            const updatedTodos = state.todos.map((i) => i.id === action.payload.id ? action.payload : i);
            return { ...state, todos: updatedTodos }
        default:
            return state;
    }
}

export default todoReducer;