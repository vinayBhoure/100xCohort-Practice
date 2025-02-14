import './App.css'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Avatar from '../public/avatar.avif';

const AppTodo = lazy(() => import('./to-do/AppTodo'))

function App() {

  return (
    <div className='bg-neutral-900 min-h-screen'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path="/to-do" element={<AppTodo />} />
        </Routes>
      </Suspense>
    </div>
  )
}

function HomeScreen() {

  return (
    <div className='text-center text-white'>
      <h1 className='text-4xl font-bold'>Practice React App</h1>
      <div>

      </div>
      <Card />
    </div>
  )
}

function Card() {

  return (
    <div className='flex-row w-60 bg-neutral-700 overflow-hidden rounded-lg'>
      <img src={Avatar} alt='placeholder' />
      <div className='flex justify-between'>
        <div className='text-left'>
          <h1 className='text-lg'>Title</h1>
          <p className='text-sm'>description</p>
        </div>
        <button className='bg-[#7033ff]'> Open </button>
      </div>

    </div>
  )
}
export default App
