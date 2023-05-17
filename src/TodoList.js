import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return <>
      <p className='display-5'>
      <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
      </p>
      </>
       })
  )
}
