// components/Header/Header.js
import React, { useContext, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import TokenContext from '../../context/TokenContext';
import TaskContext from '../../context/TaskContext';
import "./header.css";

function Header() {
    const token = localStorage.getItem("authToken");
    const { user } = useContext(TokenContext);
    const { dispatch } = useContext(TaskContext);
    const [searchTerm, setSearchTerm] = useState("");

    const logout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        dispatch({ type: 'SEARCH_TASK', payload: e.target.value });
    }

    return (
        <div>
            <nav className='header bg-slate-200 flex justify-between items-center'>
                <div className="logo w-1/4 text-center">
                    <NavLink to="/">Todo App</NavLink>
                </div>
                <div className='flex justify-between'>
                    {token ? (
                        <div className='flex items-center justify-center'>
                            <input 
                                type="text"
                                value={searchTerm}
                                onChange={handleSearch}
                                placeholder="Search tasks..."
                                className="mr-5 p-2 border rounded"
                            />
                            <p className='mr-5'>welcome, <span className=' text-xl text-blue-800 capitalize'>{user.name}</span></p>
                            <button onClick={logout} className="logout mr-4">Logout</button>
                        </div>
                    ) : (
                        <ul className='flex justify-end gap-3 w-3/4 pr-6'>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register">Register</NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;
