import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import { UserProvider, useUserContext } from './context/userContext';

function AppTodo() {

    const { user, token } = useUserContext();

    console.log('user:', user)
    console.log('token:', token)

    return (
            <div className='bg-white min-h-screen max-w-screem'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<h1>Login</h1>} />
                    <Route path='/register' element={<h1>Register</h1>} />
                </Routes>
            </div>
    )
}

export default AppTodo;
