// components/Completed.js
import React, { useContext } from 'react';
import Task from './Task/Task';
import TaskContext from '../context/TaskContext';

function Completed() {
    const { taskState } = useContext(TaskContext);
    const completedTasks = taskState.tasks.filter(task => task.completed && task.title.toLowerCase().includes(taskState.searchTerm.toLowerCase()));

    return (
        <div>
            {completedTasks.length !== 0 ? (
                completedTasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        id={index}
                    />
                ))
            ) : (
                <h1>No Completed Tasks Found</h1>
            )}
        </div>
    );
}

export default Completed;
