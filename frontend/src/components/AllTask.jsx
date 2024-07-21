// components/AllTask.js
import React, { useContext } from 'react';
import Task from './Task/Task';
import TaskContext from '../context/TaskContext';

function AllTask() {
    const { taskState } = useContext(TaskContext);
    const filteredTasks = taskState.tasks.filter(task =>
        task.title.toLowerCase().includes(taskState.searchTerm.toLowerCase())
    );

    return (
        <div>
            {filteredTasks.length !== 0 ? (
                filteredTasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        id={index}
                    />
                ))
            ) : (
                <h1>No Task Found</h1>
            )}
        </div>
    );
}

export default AllTask;
