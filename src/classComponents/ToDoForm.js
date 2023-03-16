import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ToDoForm extends Component {
    render() {
        const { error, taskInput, handleChange, handleSubmit } = this.props;

        return (
            <div className={'d-flex flex-column align-items-center mb-4'}>
                <div className={'form-group mb-2'}>
                    <form
                        className={'d-flex'}
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            value={taskInput}
                            onChange={handleChange}
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
    taskInput: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
}

ToDoForm.defaultProps = {
    error: false,
    taskInput: '',
    handleSubmit: () => {},
    handleChange: () => {},
}

export default ToDoForm;