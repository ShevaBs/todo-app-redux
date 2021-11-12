import './App.css';
import AddButton from './components/AddButton/AddButton';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import TodoList from './components/TodoList/TodoList';
import { useSelector } from 'react-redux';

function App() {
  const modalOpen = useSelector(state => state.modal.modal)

  return (
    <div className="app">
      <div className="todo-wrapper">
        <Header/>
        <TodoList />
        <AddButton />
      </div>
      {
        modalOpen && <Modal />
      }
    </div>
  );
}

export default App;
