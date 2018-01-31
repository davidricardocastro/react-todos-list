import React, { Component } from 'react';

import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    todos: [
      {id: 0, text: "make dinner"},
      {id: 1, text: "buy fruits"},
      {id: 2, text: "book car maintenance"},
      {id: 3, text: "cut the grass"}
    ],
    nextId:4 
  }

  this.addTodo = this.addTodo.bind(this);
  this.removeTodo = this.removeTodo.bind(this);
}

addTodo(todoText) {
  console.log("Todo added: ", todoText);
}

removeTodo(id){
 console.log("removing todo: ", id);
}


  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo}/>
        </div>

      </div>
    );
  }
}

export default App;
