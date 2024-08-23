import { ActionTypes } from "../actionTypes/todoTypes"

export const addTodo = (payload) => ({
    type:ActionTypes.ADD_TODO,
    payload
})

export const removeTodo = (payload) => ({
    type:ActionTypes.REMOVE_TODO,
    payload
})

export const editTodo = (payload) => ({
    type:ActionTypes.EDIT_TODO,
    payload
})

