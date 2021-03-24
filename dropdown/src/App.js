import React, { Component } from 'react';
// import DropDown from './components/dropDown/DropDown';
import ToDoList from './components/toDoList'

class App extends Component {
  state = {
    todos: [
      {id: 'id-1', text: 'ToDo 1', comleted: true},
      {id: 'id-2', text: 'ToDo 2', comleted: true},
      {id: 'id-3', text: 'ToDo 3', comleted: false},
      {id: 'id-4', text: 'ToDo 4', comleted: false}
    ]
  }

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  

  render() {
    const { todos } = this.state 
    
    const totalTodoCount = todos.length
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    )

    return (
      <>
      <div>
        <p>Quantity: {totalTodoCount}</p>
        <p>Quantity done: {completedTodosCount}</p>
      </div>
      <ToDoList todos = {todos} onDeleteTodo={this.deleteTodo}/>
      </>
    )
  }
}


export default App;