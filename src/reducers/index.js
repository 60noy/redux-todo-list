import * as actionTypes from '../actions/types'

const todos = (state = [{ name: 'Learn Redux', completed: false }], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        { name: action.name, completed: false },
      ]
    case actionTypes.DELETE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ]
    case actionTypes.TOGGLE_TODO: {
      const currentTodo = state[action.index]
      console.log('todoo')
      return [
        ...state.slice(0, action.index),
        { name: currentTodo.name, completed: !currentTodo.completed },
        ...state.slice(action.index + 1),
      ]
    }
    default:
      return state
  }
}


export default todos
