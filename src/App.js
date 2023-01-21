import {useEffect, useState} from "react";
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import ToDoHeader from './ToDoHeader'

function App() {
    const [todo, setTodo] = useState(() => {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : []
    })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todo));
    }, [todo])

    const addTask = (task) => {
        if (task) {
            const newItem = {
                id: Math.random().toString(36).substring(2,9),
                task: task,
                complete: false,
                editing: false,
            }
            setTodo([...todo, newItem])
        }
    }

    const removeTask = (id) => {
        setTodo([...todo.filter(el => el.id !== id)])
    }

    const handleToggle = (id) => {
        setTodo([...todo.map(
            el => el.id === id
                ? {...el, complete: !el.complete}
                : {...el}
        )])
    }

    const saveEditTask = (id, value) => {
        setTodo([...todo.map(
            el => el.id === id
                ? {...el, task: value}
                : {...el}
        )])
    }

    return (
    <div className="container">
        <ToDoHeader todo={todo}/>
        <ToDoForm addTask={addTask}/>
        <div className={'list-group col-5 mx-auto'}>
            {todo.map((todo)=>{
                return (
                    <ToDo
                        todo={todo}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                        saveEditTask={saveEditTask}
                        key={todo.id}
                    />
                )
            })}
        </div>
    </div>
    );
}

export default App;
