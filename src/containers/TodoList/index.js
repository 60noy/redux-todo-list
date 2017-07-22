import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoItem from '../../components/TodoItem'
import { deleteTodo, addTodo, toggleTodo } from '../../actions/index'

class TodoList extends Component {
// adds the input value to the todo list
  handleAddTodo = () => {
    const input = this.inputField
    if (input.value) {
      this.props.addTodo(input.value)
      input.value = ''
      input.focus()
    }
  }
  // set input field ref
  refsInput = input => (this.inputField = input)

  render() {
    const { todos } = this.props
    return (
      <div>
        <ul>
          {
          todos.map((todo, index) => (
            <TodoItem
              key={todo.name}
              completed={todo.completed}
              name={todo.name}
              onToggle={() => this.props.toggleTodo(index)}
            />),
      )}
        </ul>
        <input type="text" ref={this.refsInput} placeholder="name your todo" />
        <button onClick={this.handleAddTodo} >Add todo </button>
      </div>

    )
  }
}

const mapStatetoProps = state => ({ todos: state.todos })

const mapDispatchToProps = dispatch => bindActionCreators({
  addTodo,
  deleteTodo,
  toggleTodo,
}, dispatch)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  // deleteTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
}

export default connect(mapStatetoProps, mapDispatchToProps)(TodoList)
