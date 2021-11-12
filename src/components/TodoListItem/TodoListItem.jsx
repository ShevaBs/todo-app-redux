import React from 'react';
import "./TodoListItem.scss";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { doneTodoAction, removeTodoAction } from '../../reducers/todosReducer';

export default function TodoListItem({todo}) {
  const dispatch = useDispatch();

  return (
    <li className="todo-list__item">
      <div 
        className={`checkbox ${todo.done ? "done" : null}`}
        onClick={() => dispatch(doneTodoAction(todo.id))}>
        <CheckIcon />
      </div>
      <p className={`${todo.done ? "done" : null}`}>
        { todo.todo }
      </p>
      <DeleteIcon 
        className="remove-btn"
        onClick={() => dispatch(removeTodoAction(todo.id))}
        />
    </li>
  )
}
