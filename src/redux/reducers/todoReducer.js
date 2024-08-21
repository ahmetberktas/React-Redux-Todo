const initialState = {
    todos: [],
    category: [],
    isEmpty: true,
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const tempTodos = state.todos.concat(action.payload);
            return { ...state, todos: tempTodos };
        case "REMOVE_TODO":
            return state;
        default:
            return state;
    }
}

export default todoReducer;