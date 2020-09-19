/*
Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/
import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import './App.css'

function App() {
    const dataItem = todosData.map(item => <TodoItem key = {item.id} item = {item}/>)
    return (
        <div className="todo-list">
           {dataItem}
        </div>
    )
}

export default App

