import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <li className="todoWrapper list-group-item">
      <p className="font-weight-bold"> {this.props.todo.text} </p> <button className="removeTodo btn btn-sm btn-outline-danger" onClick={(e) => this.removeTodo(this.props.id)}>remove</button> 
      </li>
    );
  }
}