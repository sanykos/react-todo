import { TODO_LIST, ADD_TODO, DELETE_TODO } from '../actions/actionTypes'

const initialState = {
    todos: [
        {
            id: 1,
            name: 'Купить хлеб',
            complete: false,
        },
        {
            id: 2,
            name: 'Купить молоко',
            complete: false,
        }
    ]
}

export default function todos(state = initialState, action) {
    switch(action.type) {
        case TODO_LIST: {
            return {
                ...state,
                todos: action.payload
            }
        }
        case ADD_TODO: {
            const { todos }  = state
            todos.push({id: todos.length + Math.random(), name: action.name, complete: false})
            return {
                ...state,
                todos
            }
        }
        case DELETE_TODO: {
            const { todos } = state
            return {
                ...state,
                todos: todos.filter((todo) => todo.id !== action.id)
            }
        }
        default:
            return state
    }
    
}