import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addTodo, deleteTodo }  from '../../store/actions/actions'

const Todo = () => {
    const [value, setValue] = useState('')

    const todos = useSelector((state ) => state.todos.todos)
    const dispatch = useDispatch()

    const changeValue = (e) => {
        setValue(e.target.value)
    }
    const handleAddTodo = (e) => {
        if(e.key === 'Enter') {
            if(!value) return
            dispatch(addTodo(value))
            setValue('')
        }
    }
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    return(
        <div className="Todo">
            <input type="text" onChange={changeValue} onKeyPress={handleAddTodo} value={value}/>
            <ul className="TodoList">
                {todos.map((todo) => ( <li key={`todo${todo.id}`}>{todo.name} <button onClick={handleDeleteTodo.bind(null, todo.id)}>Удалить</button></li> ))}
            </ul>
        </div>
    )
}

export default Todo