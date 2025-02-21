import React from 'react'
import Logo from '../assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { showMenu } from '../atoms/atoms';
import { RxCross2 } from "react-icons/rx";

function Header() {

    const menu = useRecoilValue(showMenu)
    const setMenu = useSetRecoilState(showMenu)
    const toggleHandler = () => {
        setMenu(!menu);
    }

    return (
        <div className='flex justify-between items-center py-3 px-6 text-lg bg-neutral-900 text-white'>
            <div className='flex items-center gap-2'>
                <button onClick={toggleHandler} className='bg-neutral-600 hover:bg-neutral-700 text-white font-bold p-2 rounded-full'>
                    {
                        !menu ? <RxHamburgerMenu /> :
                            <RxCross2 />
                    }
                </button>
                <img src={Logo} className='h-8 mix-blend-color' alt='' />
            </div>
            <div className='flex gap-2 items-center'>
                <input placeholder='search'
                    className='px-3 py-1 w-lg text-base rounded-4xl border active:ring active:ring-blue-500 active:border-transparent border-neutral-600'></input>
                <div className='p-2 border border-neutral-600 hover:border-transparent hover:bg-neutral-700 rounded-full'>
                    <FaMicrophone />
                </div>
            </div>
            <div className='border border-neutral-600 hover:border-transparent hover:bg-neutral-700 p-2 text-sm rounded-4xl'>
                <div className='flex gap-1 items-center'>
                    <RxAvatar size={'1.5rem'} />
                    <span>Sign Up</span>
                </div>
            </div>
        </div>
    )
}

export default Header
