/* eslint-disable react/prop-types */
import React from 'react'
import { Task } from '../Task/Task'
import { IsEmpty } from '../General/IsEmpty'
import './css/completedContainer.css'

// eslint-disable-next-line react/prop-types
export const CompletedContainer = ({ completed, handleDeleteTask, activateDeleteSpinner, compare_id }) => {
  return (
    <div className='completedContainer'>

      <div className='completedContainer-title'>
        Tareas completadas
      </div>
      {
        completed.length > 0
          ? completed.map(task => (
          <div key={ task._id }>
            <Task compare_id={ compare_id } activateDeleteSpinner={ activateDeleteSpinner } handleDeleteTask={ handleDeleteTask } task={ task }/>
          </div>
          ))
          : <IsEmpty />
      }
    </div>
  )
}
