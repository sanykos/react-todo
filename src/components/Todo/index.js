import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Todo = () => {

    const todos = useSelector((state ) => state.todos)

    const handleAddTodo = (id) => {
        console.log(id)
    }

    return(
        <div className="Todo">
            <ul className="TodoList">
                {todos.map((todo) => ( <li key={`todo${todo.id}`}>{todo.name} <button onClick={handleAddTodo.bind(null, todo.id)}>Добавить</button></li> ))}
            </ul>
        </div>
    )
}

export default Todo