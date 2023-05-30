import React from 'react'
import './Todo.css'
const TodoItem = ({title, checked, handleClick, handleDelete, id}) => {
  return (
    <li className='todo-item'>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id={`check${id}`} checked={checked} onChange={() => handleClick(id)}/>
            <label className={`form-check-label ${checked && 'todo-item-checked'}`} htmlFor={`check${id}`}>
                {title}
            </label>
        </div>
        <div>
            <i className="fas fa-trash" onClick={() => handleDelete(id)}></i>
        </div>
    </li>
  )
}

export default TodoItem