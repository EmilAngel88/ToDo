import {useMemo} from "react";

function ToDoHeader({todo}) {
    const isUncompletedTasksExists = useMemo(() => {
        return todo.filter(el => !el.complete);
    }, [todo]);

    return (
        <header>
            <h1 className={'text-center mt-4 mb-4'}>
                {!todo.length
                    ? 'There aren\'t tasks'
                    : isUncompletedTasksExists.length
                        ? `Tasks list: ${todo.length}`
                        : 'All Tasks are completed!'
                }
            </h1>
        </header>
    )
}

export default ToDoHeader