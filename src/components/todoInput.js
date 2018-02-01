import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);

    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    addTodo(todo) {

        if (todo.length > 0) {  //to ensure the todo text is not empty
            this.props.addTodo(todo);
            this.setState({ value: '' });
        }



    }

    render() {
        return (
            <div className="col-12">
                <div className="input-group m-3 ">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">New to do</span>
                    </div>
                    <input className="input-group-text " type="text" value={this.state.value} onChange={this.handleChange} />
                    <button className="btn btn-secondary" onClick={() => this.addTodo(this.state.value)}> Submit </button>
                </div>
            </div>
        );

    }

}