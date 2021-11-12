import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeModalAction } from '../../reducers/modalReducer';
import { addTodoAction } from '../../reducers/todosReducer';

import "./AddForm.scss"

export default function AddForm() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if(todo) {
      dispatch(addTodoAction({
        id: Date.now(),
        todo,
        done: false
      }));
      setTodo('');
      dispatch(closeModalAction());
    }
  }

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <input 
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text" placeholder="What to do?..."/>
      <div className="add-form__btns">
        <button className="btn btn_add">
          Add
        </button>
        <button
          onClick={() => setTodo('')} 
          className="btn btn_reset">
          Reset
        </button>
      </div>
    </form>
  )
}
