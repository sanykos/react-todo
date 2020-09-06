import { ADD_TODO, DELETE_TODO } from './actionTypes'


export function addTodo(name) {
    return {
        type: ADD_TODO,
        name
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
}