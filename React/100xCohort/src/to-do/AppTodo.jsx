import React from 'react'
import { useState } from 'react'

function AppTodo() {

    const [tasks, setTasks] = useState([]);

    const addTaskHandler = () => {
        setTasks([...tasks, { id: tasks.length + 1, name: `Task ${tasks.length + 1}` }]);
    }

    const removeTaskHandler = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const [info, setInfo] = useState({
        name: "",
        description: ""
    });

    const changeHandler = (e) => {
        e.preventDefault();
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    return (
        <div className='bg-white min-h-screen max-w-screem'>
            <input name='name' value={info.name} placeholder='title' onChange={(e) => changeHandler(e)}></input>
            <input name='description' value={info.description} placeholder='description' onChange={(e) => changeHandler(e)}></input>
            <button onClick={addTaskHandler} >Add </button>
            {
                tasks.map((task, i) => {
                    return (
                        <div key={i}>
                            <p>{task.name}</p>
                            <p>{task.id}</p>
                            <button onClick={() => removeTaskHandler(task.id)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AppTodo;
