import React, { useState } from 'react'
import { StatusContainer } from './components/StatusContainer/StatusContainer'
import {
  Routes,
  Route
} from 'react-router-dom'
import { TaskDescription } from './components/Task/TaskDescription'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import './App.css'

function App () {
  const [user, setUser] = useState(null)

  return (
    <Routes>
      <Route path="/task/:taskId" element={ <TaskDescription/> } />
      <Route
        path="/workspace"
        element={
          <div className='App-background'>
            <StatusContainer />
          </div>
        }
      />
      <Route path='/login' element={<Login setUser={ setUser } user={ user }/>} />
      <Route path='/' element={<Register />} />
    </Routes>
  )
}

export default App
