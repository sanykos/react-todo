import { ADD_TODO } from './actionTypes'


export default function addTodo(name) {
    return {
        type: ADD_TODO,
        payload: name
    }
}