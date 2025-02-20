import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { FaHome } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { connectionAtom, homeAtom, jobAtom, messageAtom, notifyAtom, sumSelector, selectAtomn } from './atom';


function AtomApp() {

    const [home, setHome] = useRecoilState(homeAtom)
    const [connection, setConnection] = useRecoilState(connectionAtom)
    const [job, setJob] = useRecoilState(jobAtom)
    const [message, setMessage] = useRecoilState(messageAtom)
    const [notify, setNotify] = useRecoilState(notifyAtom)
    const [select, setSelect] = useRecoilState(selectAtomn)

    const allNotification = useRecoilValue(sumSelector)

    const incrementHandler = (option) => {
        if (option === 'home') setHome(home + 1)
        if (option === 'connection') setConnection(connection + 1)
        if (option === 'job') setJob(job + 1)
        if (option === 'message') setMessage(message + 1)
        if (option === 'notify') setNotify(notify + 1)
    }

    const decrementHandler = (option) => {
        if (option === 'home' && home > 0) setHome(home - 1)
        if (option === 'connection' && connection > 0) setConnection(connection - 1)
        if (option === 'job' && job > 0) setJob(job - 1)
        if (option === 'message' && message > 0) setMessage(message - 1)
        if (option === 'notify' && notify > 0) setNotify(notify - 1)
    }

    const fetchData = async () => {
        const res = await fetch('http://localhost:3000/atom');
        const data = await res.json();
        console.log(data)
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='h-screen w-screen bg-white flex flex-col gap-4 justify-center items-center'>
            <div className='flex items-center bg-blue-50 rounded-2xl'>
                <button className='relative p-6 active:bg-gray-100 rounded-l-xl active:inset-shadow-sm hover:bg-blue-100' >
                    <FaHome size={'2rem'} />
                    <span></span>
                    <div className={`text-white bg-red-500 absolute top-0 right-0 rounded-bl-xl text-xs ${home ? 'p-2' : ''}`}>
                        {(home) ? home : (null)}
                    </div>
                </button>

                <button className='relative p-6 active:bg-gray-100 active:inset-shadow-sm hover:bg-blue-100' >
                    <BsPeopleFill size={'2rem'} />
                    <div className={`text-white bg-red-500 absolute top-0 right-0 rounded-bl-xl text-xs ${connection ? 'p-2' : ''}`}>
                        {(connection) ? connection : (null)}
                    </div>
                </button>

                <button className='relative p-6 active:bg-gray-100 active:inset-shadow-sm hover:bg-blue-100' >
                    <PiSuitcaseSimpleDuotone size={'2rem'} />
                    <div className={`text-white bg-red-500 absolute top-0 right-0 rounded-bl-xl text-xs ${job ? 'p-2' : ''}`}>
                        {(job) ? job : (null)}
                    </div>
                </button>

                <button className='relative p-6 active:bg-gray-100 active:inset-shadow-sm hover:bg-blue-100' >
                    <BiSolidMessageDetail size={'2rem'} />
                    <div className={`text-white bg-red-500 absolute top-0 right-0 rounded-bl-xl text-xs ${message ? 'p-2' : ''}`}>
                        {(message) ? message : (null)}
                    </div>
                </button>

                <button className='relative p-6 active:bg-gray-100 active:inset-shadow-sm hover:bg-blue-100' >
                    <FaBell size={'2rem'} />
                    <div className={`text-white bg-red-500 absolute top-0 right-0 rounded-bl-xl text-xs ${notify ? 'p-2' : ''}`}>
                        {(notify) ? notify : (null)}
                    </div>
                </button>

                <button className='relative p-6 active:bg-gray-100 rounded-r-xl active:inset-shadow-sm hover:bg-blue-100' >
                    <RxAvatar size={'2rem'} />
                    <div className={`text-white bg-red-500 absolute top-0 right-0 rounded-bl-xl text-xs ${notify ? 'p-2' : ''}`}>
                        {(allNotification) ? allNotification : (null)}
                    </div>
                </button>
            </div>
            <div className='flex gap-4'>
                <button onClick={() => incrementHandler(select)} className='bg-gray-100 p-8 py-1 rounded-md text-lg font-bold active:bg-gray-300 active:inset-shadow-2xs hover:bg-gray-200'> + </button>
                <select value={select} onChange={(e) => setSelect(e.target.value)} className='px-2 rounded-md bg-gray-100'>
                    <option value={'home'}>Home</option>
                    <option value={'connection'}>Connection</option>
                    <option value={'job'}>Job</option>
                    <option value={'message'}>Message</option>
                    <option value={'notify'}>Notification</option>
                </select>
                <button onClick={() => decrementHandler(select)} className='bg-gray-100 p-8 py-1 rounded-md text-lg font-bold active:bg-gray-300 active:inset-shadow-2xs hover:bg-gray-200'> - </button>
            </div>
        </div>
    )
}

export default AtomApp;