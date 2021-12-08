/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// import React from 'react'
import { Task } from '../Task/Task'
import { IsEmpty } from '../General/IsEmpty'
import './css/inProcessContainer.css'

export const InProcessContainer = ({ process, handleDeleteTask }) => {
  return (
    <div className='inProcessContainer'>
      <div className='inProcessContainer-title'>
        En proceso
      </div>
      {
        process.length > 0
          ? process.map(task => (
          <div key={ task._id }>
            <Task handleDeleteTask={ handleDeleteTask } task={ task }/>
          </div>
          ))
          : <IsEmpty />
      }
    </div>
  )
}
