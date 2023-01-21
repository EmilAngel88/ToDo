import {useEffect, useState} from "react";

function ToDoForm({ addTask }) {
    const [taskInput, setTaskInput] = useState(()=> {
        const input = localStorage.getItem('input');
        return input ? input : ''
    })
    const [error, setError] = useState(false)

    useEffect(() => {
        localStorage.setItem('input', taskInput);
    }, [taskInput])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskInput.trim()) {
            addTask(taskInput)
            setTaskInput('')
        } else {
            setError(true)
            setTaskInput('')
        }

    }

    const handleChange = (e) => {
        setError(false)
        setTaskInput(e.target.value)
    }

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
    )
}


export default ToDoForm