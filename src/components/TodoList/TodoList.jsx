import React from 'react'
import { useSelector } from 'react-redux';
import TodoListItem from './../TodoListItem/TodoListItem';
import "./TodoList.scss"

export default function TodoList() {
  const todos = useSelector(state => state.todos);

  if(todos.length === 0) {
    return <h2 className="todo-list_empty">Nothing todo</h2>
  }

  return (
    <ul className="todo-list">
      {
        todos?.map(todo => (
          <TodoListItem key={todo.id} todo={todo}/>
        ))
      }
    </ul>
  )
}
