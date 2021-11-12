import React from 'react';
import "./AddButton.scss";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { openModalAction } from '../../reducers/modalReducer';


export default function AddButton() {
  const dispatch = useDispatch();

  return (
    <button className="add-btn" onClick={() => dispatch(openModalAction())}>
      <AddIcon/>
    </button>
  )
}
