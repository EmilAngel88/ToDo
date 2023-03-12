import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ToDoForm extends Component {
    state = {
        taskInput: '',
    }

    // При вводе в инпут данные нужно сохранять внутри компонента или сразу подымать их в родителя?
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.taskInput.trim()) {
            this.props.addTask(this.state.taskInput);
            this.setState({
                taskInput: ''
            })
        } else {
            this.props.setError(true)
        }
    }

    // Я сделал так что пока таска не сохранена, введёный текст хранится внутри компонента формы. А как только мы сабмитим её, данные отпрвляются наверх и сохраняются там
    handleChange = (e) => {
        this.props.setError(false)

        this.setState({
            taskInput: e.target.value
        })
    }


    render() {
        const { error } = this.props;

        return (
            <div className={'d-flex flex-column align-items-center mb-4'}>
                <div className={'form-group mb-2'}>
                    <form
                        className={'d-flex'}
                        onSubmit={this.handleSubmit}
                    >
                        <input
                            type="text"
                            value={this.state.taskInput}
                            onChange={this.handleChange}
                            placeholder='Enter task...'
                            className={`form-control ${error ? 'is-invalid' : ''}`}
                        />
                        <button className={'btn btn-primary'}>
                            Save
                        </button>
                    </form>
                </div>
                { error
                    ? <h3 className={'text-danger'}>Error: void task</h3>
                    : ''
                }
            </div>
        );
    }
}

ToDoForm.propTypes = {
    error: PropTypes.bool,
    addTask: PropTypes.func,
    setError: PropTypes.func,
}

ToDoForm.defaultProps = {
    error: false,
    addTask: () => {},
    setError: () => {},
}

export default ToDoForm;