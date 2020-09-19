
import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  render() {
    const dataItem = todosData.map(item => <TodoItem key={item.id} item={item} />)
    return(
      <div className = "todo-list" >
        {dataItem}
      </div>
    )
  }
}

export default App

