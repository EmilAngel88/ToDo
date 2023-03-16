import React, { Component } from "react";
import ToDoHeader from './ToDoHeader';
import ToDoForm from './ToDoForm';

class ToDoController extends Component {
    state = {
        error: false,
        toDoList: [],
        taskInput: '',
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

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.taskInput.trim()) {
            this.addTask(this.state.taskInput);
            this.setState({
                taskInput: ''
            })
        } else {
            this.state.setError(true)
        }
    }

    handleChange = (e) => {
        this.setError(false)

        this.setState({
            taskInput: e.target.value
        })
    }

    render() {
        return(
            <>
                <ToDoHeader toDoList={this.state.toDoList}/>
                <ToDoForm
                    error={this.state.error}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    taskInput={this.state.taskInput}
                />
            </>
        );
    }
}

export default ToDoController;