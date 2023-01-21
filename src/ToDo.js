import {useState} from "react";

function ToDo ({ todo, toggleTask, removeTask, saveEditTask }) {
    const [editingTask, setEditingTask] = useState(todo.name)
    const [editingFlag, setEditingFlag] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editingTask.trim()) {
            saveEditTask(todo.id, editingTask)
            setEditingTask('')
            setEditingFlag(false)
        } else {
            setError(true)
            setEditingTask('')
        }

    }

    const handleChange = (e) => {
        setError(false)
        setEditingTask(e.target.value)
    }

    const handleEdit = (e) => {
        if(e) e.preventDefault()
        setEditingFlag(!editingFlag)
        setEditingTask(todo.task)
    }

    return (
        <li
            key={todo.id}
            className={'list-group-item'}
        >

            {editingFlag
                ? <div>
                    <form
                        className={'d-flex'}
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            value={editingTask}
                            onChange={handleChange}
                            className={`form-control ${error ? 'is-invalid' : ''}`}
                        />
                        <button className={'btn btn-primary btn-sm'}>
                            Save
                        </button>
                        <button
                            onClick={handleEdit}
                            className={'btn btn-success btn-sm'}
                        >
                            Cansel
                        </button>
                    </form>
                    { error
                        ? <h5 className={'text-center text-danger'}>Error: void task</h5>
                        : ''
                    }
                </div>
                : <div className={' d-flex justify-content-between align-items-center'}>
                    <div className={todo.complete ? 'text-decoration-line-through text-muted' : ''}>
                        {todo.task}
                    </div>
                    <div>
                        {!todo.complete
                            ? <button
                                    onClick={() => handleEdit()}
                                    className={'btn-sm btn btn-outline-primary'}
                                >
                                    edit
                                </button>
                            : ''
                        }

                        <button
                            onClick={()=> toggleTask(todo.id)}
                            className={`btn-sm btn btn${todo.complete ? '' : '-outline'}-success`}
                        >
                            {todo.complete ? 'undone' : 'complete'}
                        </button>

                        <button
                            onClick={() => removeTask(todo.id)}
                            className={'btn-sm btn btn-outline-danger'}
                        >
                            del
                        </button>
                    </div>
                </div>
            }
        </li>
    )
}

export default ToDo