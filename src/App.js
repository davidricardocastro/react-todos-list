import React, { Component } from 'react';

import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 0, text: "make dinner" },
        { id: 1, text: "buy fruits" },
        { id: 2, text: "book car maintenance" },
        { id: 3, text: "clean the house" },
        { id: 4, text: "return books to library" },
        { id: 5, text: "study reactjs" },
        { id: 6, text: "cut the grass" }
        
      ],
      nextId: 7
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: todoText });
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }



  render() {
    return (
      <div className="App">
        <div className="row">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />

          <div className="col-12">
            <ul className="list-group">
              {
                this.state.todos.map((todo) => {
                  return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
                })
              }
            </ul>
          </div>
        </div >

      </div >
    );
  }
}

export default App;
