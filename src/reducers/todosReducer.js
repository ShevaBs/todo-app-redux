const initialState = [
  {id: 1, todo: "Drink coffee", done: false},
  {id: 2, todo: "Build awesome app", done: false},
  {id: 3, todo: "Learn Redux", done: true},
  {id: 4, todo: "Buy milk", done: false},
]

const ADD_TODO = "ADD_TODO";
const DONE_TODO = "DONE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

export const todosReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload
      ]
    case DONE_TODO:
      return state.map(item => {
        if(item.id === action.payload) {
          item.done = !item.done;
        }
        return item;
      })

    case REMOVE_TODO:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
}

export const addTodoAction = (payload) => ({type: ADD_TODO, payload});
export const doneTodoAction = (payload) => ({type: DONE_TODO, payload});
export const removeTodoAction = (payload) => ({type: REMOVE_TODO, payload});