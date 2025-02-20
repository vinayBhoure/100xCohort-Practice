import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Avatar from '../public/avatar.avif';
import { ProjectList } from './data/projectList'
import { UserProvider } from '../to-do/context/userContext';
import AtomApp from '../atomPractice/AtomApp';
import { RecoilRoot } from 'recoil';

const AppTodo = lazy(() => import('../to-do/AppTodo'))

function App() {

  return (
    <div className='bg-neutral-900 min-h-screen'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/atom' element={<RecoilRoot><AtomApp /></RecoilRoot>} />
          <Route path="/to-do/*" element={<UserProvider><AppTodo /></UserProvider>} />
        </Routes>
      </Suspense>
    </div>
  )
}

function HomeScreen() {

  return (
    <div className='text-center text-white p-16'>
      <h1 className='text-4xl font-bold mb-16'>Practice React App</h1>
      <div className='max-w-max mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {
          ProjectList.length >= 1 ? ProjectList.map((project, index) => {
            return (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            )
          }) :
            <div> No Projects Found </div>
        }

      </div>
    </div>
  )
}

function Card({ title, description, link }) {

  return (
    <div className='flex-row w-70 bg-neutral-700 overflow-hidden rounded-lg'>
      <img src={Avatar} alt='placeholder' />
      <div className='flex justify-between items-center bg-[#22222e] py-2 px-4'>
        <div className='text-left '>
          <h1 className='text-lg'>{title}</h1>
          <p className='text-sm'>{description}</p>
        </div>
        <NavLink to={link}>
          <button className='bg-[#7033ff] py-2 px-4 rounded-lg hover:pointer'> Open </button>
        </NavLink>
      </div>
    </div>
  )
}

export default App;
