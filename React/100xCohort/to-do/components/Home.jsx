import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { GoPlus } from "react-icons/go";

function Home() {

    const [tasks, setTasks] = useState([])
    const [info, setInfo] = useState({
        title: '',
        description: '',
        status: false
    })

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const addTask = () => {
        if (!info.title || !info.description) {
            toast.error('Please fill all the fields')
            return
        }

        setTasks([...tasks, info])
        setInfo({
            title: '',
            description: '',
            status: false
        })
    }

    const removeTask = (index) => {
        let newTasks = tasks.filter((task, i) => i !== index)
        setTasks(newTasks)
    }

    const changeStatus = (index) => {

    }

    return (
        <div className=' bg-[#e8e9eb] min-h-screen max-w-screen'>
            <div className='bg-white h-14 max-w-7xl mx-auto mb-12 flex items-center justify-between px-4 shadow-2xl rounded-2xl'>
                <h1 className='font-bold text-2xl'>Task Reminder</h1>

                <div className='flex gap-1 items-center'>
                    <IoIosLogOut size={"1.25rem"} /> Logout
                </div>
            </div>
            <div className='max-w-7xl mx-auto flex justify-between items-center' >
                <div className='flex gap-4 flex-1 mr-12'>
                    <input
                        className='px-4 py-2 basis-1/3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        name='title'
                        value={info.title}
                        onChange={(e) => handleChange(e)}
                        type='text'
                        placeholder='Add a new Todo...'

                    />
                    <input
                        className=' px-4 py-2 basis-2/3  bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        name='description'
                        value={info.description}
                        onChange={(e) => handleChange(e)}
                        type='text'
                        placeholder='Add description'

                    />
                </div>
                <button
                    className='bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-1'
                    onClick={addTask}><GoPlus /> Add</button>
            </div>
            <div className=' max-w-7xl mx-auto rounded-md grid grid-cols-4 gap-4 mt-16  '>
                {
                    tasks && tasks.map((task, index) => {
                        return (
                            <div key={index} className= 'bg-white shadow-lg  rounded-2xl border border-gray-300 p-4 relative'>
                                <input
                                    name='status'
                                    checked={info.status}
                                    onChange={() => { }}
                                    type='checkbox'
                                    className='absolute top-4 right-4 border-gray-300 rounded-lg hover:ring-2 hover:ring-blue-500 hover:border-transparent'
                                >
                                </input>
                                <div>
                                    <h1 className='text-lg font-semibold break-words overflow-hidden'>Title: {task.title}</h1>
                                    <p className='text-md break-words overflow-hidden '>Description: {task.description}</p>
                                </div>
                                <div
                                onClick={()=>removeTask(index)}
                                className='mt-2 text-white bg-red-500 hover:bg-red-600 active:bg-red-800 rounded-md p-2 flex gap-2 items-center justify-center'
                                >
                                    <RiDeleteBinLine /> Delete
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Home
