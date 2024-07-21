function taskReducer(state, action) {
    console.log("taskreducer");
    switch (action.type) {
        case "ADD_TASK": {
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        title: action.title,
                        description: action.description,
                        completed: false
                    }
                ]
            };
        }
        case "SET_TASK": {
            return {
                ...state,
                tasks: action.payload
            };
        }
        case "REMOVE_TASK": {
            return {
                ...state,
                tasks: state.tasks.filter((task, index) => index !== action.id)
            };
        }
        case "MARK_DONE": {
            return {
                ...state,
                tasks: state.tasks.map((task, index) => {
                    if (index === action.id) {
                        return {
                            ...task,
                            completed: !task.completed
                        };
                    }
                    return task;
                })
            };
        }
        case "SEARCH_TASK": {
            return {
                ...state,
                searchTerm: action.payload
            };
        }
        default: {
            throw new Error("Unknown Action: " + action.type);
        }
    }
}

export default taskReducer;
