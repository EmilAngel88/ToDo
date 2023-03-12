import React, {Component} from 'react';

class ToDoHeader extends Component {
    render() {
        const { toDoList } = this.props;
        const uncompletedTasksCount = toDoList.filter(el => !el.complete);

        return (
            <header>
                <h1 className={`text-center mt-4 mb-1 ${!uncompletedTasksCount.length ? 'mb-4' : ''}`}>
                    {!toDoList.length
                        ? 'There aren\'t tasks'
                        : uncompletedTasksCount.length
                            ? `Tasks list: ${toDoList.length}`
                            : 'All Tasks are completed!'
                    }
                </h1>
                {uncompletedTasksCount.length ? <h5 className={'text-center mb-4'}>
                    {`${uncompletedTasksCount.length} uncompleted`}
                </h5>
                    : ''
                }
            </header>
        );
    }
}

export default ToDoHeader;