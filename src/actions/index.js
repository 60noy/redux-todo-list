import * as actionTypes from './types'

export const addTodo = name => ({
  type: actionTypes.ADD_TODO,
  name,
})

export const deleteTodo = index => ({
  type: actionTypes.DELETE_TODO,
  index,
})

export const toggleTodo = index => ({
  type: actionTypes.TOGGLE_TODO,
  index,
})
