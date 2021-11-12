import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModalAction } from '../../reducers/modalReducer';
import AddForm from '../AddForm/AddForm'
import "./Modal.scss"

export default function Modal() {
  const dispatch = useDispatch();

  return (
    <div className="modal" onClick={() => dispatch(closeModalAction())}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <AddForm/>
      </div>
    </div>
  )
}
