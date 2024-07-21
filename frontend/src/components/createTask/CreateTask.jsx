import React, { useState, useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TokenContext from '../../context/TokenContext';
import axios from "../../Axios/axios.js";
import "./createTask.css";

function CreateTask() {
    const { dispatch } = useContext(TaskContext);
    const { userToken } = useContext(TokenContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [toast, setToast] = useState(null);

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/task/addTask", { title, description }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            setToast({ message: res.data.message, type: 'success' });
            dispatch({
                type: "ADD_TASK",
                title,
                description
            });
            setTitle("");
            setDescription("");
        } catch (error) {
            setToast({ message: 'Failed to add task', type: 'error' });
            console.log(error);
        }
    };

    return (
        <div className="addContainer md:w-1/3 md:mx-auto mx-3 mt-5 flex justify-center relative">
            <div className='w-11/12 p-5 shadow-lg rounded-lg bg-white dark:bg-gray-800 relative z-10'>
                <h2 className='text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white'>Create New Task</h2>
                <form onSubmit={handleAdd}>
                    <div className='mb-4'>
                        <label htmlFor="title" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            <i className="fas fa-heading mr-2"></i> Title
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                required
                                onChange={(e) => setTitle(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-transform duration-300 hover:scale-105'
                            />
                            <i className="fas fa-edit absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="description" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            <i className="fas fa-align-left mr-2"></i> Description
                        </label>
                        <div className="relative">
                            <textarea
                                rows={5}
                                name="description"
                                id="description"
                                value={description}
                                required
                                onChange={(e) => setDescription(e.target.value)}
                                style={{ resize: "none" }}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-transform duration-300 hover:scale-105'
                            />
                            <i className="fas fa-pencil-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <button
                            type='submit'
                            className='bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white font-semibold rounded-md px-5 py-2.5 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-transform duration-300 hover:scale-110 mb-4'
                        >
                            <i className="fas fa-plus-circle mr-2"></i> Add
                        </button>
                        <img 
                            src="https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Decorative"
                            className='w-80 h-80 object-contain rounded-lg shadow-md mt-4'
                        />
                    </div>
                </form>
                {toast && (
                    <div className={`toast p-3 rounded-xl shadow-2xl text-center fixed bottom-4 left-1/2 transform -translate-x-1/2 ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white animate-toast`}>
                        <p>{toast.message}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CreateTask;
