/* eslint-disable react/prop-types */
import React from 'react'
import { Task } from '../Task/Task'
import { IsEmpty } from '../General/IsEmpty'
import './css/completedContainer.css'

// eslint-disable-next-line react/prop-types
export const CompletedContainer = ({ completed, handleDeleteTask }) => {
  return (
    <div className='completedContainer'>

      <div className='completedContainer-title'>
        Tareas completadas
      </div>
      {
        completed.length > 0
          ? completed.map(task => (
          <div key={ task._id }>
            <Task handleDeleteTask={ handleDeleteTask } task={ task }/>
          </div>
          ))
          : <IsEmpty />
      }
    </div>
  )
}
