import React, { Component } from "react";
import ToDoHeader from './ToDoHeader';
import ToDoForm from './ToDoForm';

class ToDoController extends Component {
    state = {
        error: false,
        toDoList: [],
    }

    addTask = (task) => {
        const newItem = {
            id: Math.random().toString(36).substring(2,9),
            task: task,
            complete: false,
        }

        this.setState({
            toDoList: [...this.state.toDoList, newItem]
        });
    }

    setError = (val) => {
        this.setState({
            error: val
        });
    }

    render() {
        return(
            <div>
                <ToDoHeader toDoList={this.state.toDoList}/>
                <ToDoForm
                    error={this.state.error}
                    setError={this.setError}
                    addTask={this.addTask}
                />
            </div>
        );
    }
}

export default ToDoController;