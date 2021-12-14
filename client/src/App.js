import React, { useState, useEffect } from 'react'
import { StatusContainer } from './components/StatusContainer/StatusContainer'
import {
  Routes,
  Route
} from 'react-router-dom'
import { TaskDescription } from './components/Task/TaskDescription'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import './App.css'
import { AuthenticationError } from './components/General/AuthenticationError'
import { addressThatIUse } from './URL/URL'

function App () {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(window.localStorage.getItem('loggedTaskAppUser'))
  }, [])


  console.log(process.env, 'process.env.NODE_ENV')
  console.log(addressThatIUse(), 'función')
  

  return (
    <Routes>

      { user 
      
        ? <>
            <Route
              path="/workspace"
              element={
                <div className='App-background'>
                  <StatusContainer />
                </div>
              }
            /> 

            <Route path="/task/:taskId" element={ <TaskDescription/> } />

          </>
        : <>
            <Route
              path="/workspace"
              element={
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <AuthenticationError />
                </div>
              }
            />
            <Route
              path="/task/:taskId"
              element={
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <AuthenticationError />
                </div>
              }
            />
        </>

        } 
      
      <Route path='/login' element={<Login setUser={ setUser } user={ user }/>} />
      <Route path='/' element={<Register />} />
    </Routes>
  )
}

export default App
