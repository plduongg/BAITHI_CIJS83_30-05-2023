import React, { useEffect, useState } from 'react'
import './Todo.css'
import TodoItem from './TodoItem'
const Todos = ({activeTab}) => {
    const [todos, setTodos] = useState([])
    const [newTodoValue, setNewTodoValue] = useState('')
    const [displayTodos, setDisplayTodos] = useState(todos)
    useEffect(() => {
        const savedTodo = JSON.parse(localStorage.getItem('todos'))
        if(savedTodo &&  savedTodo.length > 0){
            setTodos(savedTodo)
        }
    }, [])
    useEffect(() => {
        if(activeTab === 0){
            setDisplayTodos(todos)
        }
        else if(activeTab === 1){
            const activeTodos = todos.filter((t) => t.checked === false)
            setDisplayTodos(activeTodos)
        }
        else{
            const completed = todos.filter((t) => t.checked === true)
            setDisplayTodos(completed)
        }
    }, [activeTab, todos])
    const clickHandler = (id) => {
        const temp = []
        todos.forEach((t) => {
            if(id === t.id){
                t.checked = !t.checked
            }
            temp.push(t)
        })
        setTodos(temp)
    }
    const handleDelete = (id) => {
        const filteredTodos = todos.filter((t) => id !== t.id)
        setTodos(filteredTodos)
        localStorage.setItem('todos', JSON.stringify(filteredTodos))
    }
    const addTodoHandler = (e) => {
        e.preventDefault()
        if(!newTodoValue) return
        setTodos((prev) => [{title: newTodoValue, checked: false, id: prev.length}, ...prev])
        setNewTodoValue('')
    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    const handlerDeleteAll = () => {
        setTodos([])
        localStorage.removeItem('todos')
    }
    
  return (
    <div>
        <div className="form">
            <form className="f-row" onSubmit={addTodoHandler}>
                <div className="f-input">
                    <input type="text" value={newTodoValue} className="form-control" onChange={(e) => setNewTodoValue(e.target.value)}/>
                </div>
                <button type='submit' className="btn btn-primary">Add</button>
            </form>
        </div>
        <ul className='todo-list'>
            {displayTodos.map((t) => <TodoItem key={t.id} title={t.title} checked={t.checked} id={t.id} handleClick={() => clickHandler(t.id)} handleDelete={() => handleDelete(t.id)}/>)}
        </ul>
        <div className='d-flex justify-content-end todo-delete-all'>
            <button className="btn btn-danger" onClick={handlerDeleteAll}>
                <i className="fas fa-trash"></i>
                delete all
            </button>
        </div>
    </div>
  )
}

export default Todos