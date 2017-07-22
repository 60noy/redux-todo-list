import React from 'react'
import TodoList from './TodoList'

const Main = () => (
  <div>
    <input type="text" />
    <button type="submit" onClick={() => console.log('clicked')} />
    <TodoList />
  </div>
)

export default Main
