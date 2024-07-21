// components/Active.js
import React, { useContext } from 'react';
import Task from './Task/Task';
import TaskContext from '../context/TaskContext';

function Active() {
    const { taskState } = useContext(TaskContext);
    const activeTasks = taskState.tasks.filter(task => !task.completed && task.title.toLowerCase().includes(taskState.searchTerm.toLowerCase()));

    return (
        <div>
            {activeTasks.length !== 0 ? (
                activeTasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        id={index}
                    />
                ))
            ) : (
                <h1>No Active Tasks Found</h1>
            )}
        </div>
    );
}

export default Active;
