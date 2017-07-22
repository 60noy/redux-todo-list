import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

const TodoItem = ({ completed, name, onToggle }) => {
  // return click function props to delete item
  const onDeleteTodo = (e) => {
    e.preventDefault()
    onToggle()
  }
  const styles = {
    completed: {
      textDecoration: 'line-through',
      color: '#454545',
      ':hover': {
        color: '#9d00e7',
        textDecoration: 'none',

      },
    },
    active: {
      color: '#9d00e7',
      ':hover': {
        textDecoration: 'line-through',
        color: '#454545',
      },
    },
  }
  return (
    <li>
      <a
        href=""
        style={completed ? styles.completed : styles.active}
        onClick={onDeleteTodo}
      >

        {name}
      </a>
    </li>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}
export default Radium(TodoItem)
