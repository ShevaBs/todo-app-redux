import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { modalReducer } from '../reducers/modalReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { todosReducer } from '../reducers/todosReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  todos: todosReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;