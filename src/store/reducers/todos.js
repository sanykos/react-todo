import { TODO_LIST } from '../actions/actionTypes'

const initialState = [
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

export default function todos(state = initialState, action) {
    switch(action.type) {
        case TODO_LIST: {
            return {
                ...state,
                todos: action.payload
            }
        }
        default:
            return state
    }
    
}