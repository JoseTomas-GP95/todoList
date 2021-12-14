import React from 'react'
import { Task } from '../Task/Task'
import { IsEmpty } from '../General/IsEmpty'
import './css/completedContainer.css'
import PropTypes from 'prop-types'

export const CompletedContainer = ({ completed, handleDeleteTask, activateDeleteSpinner, compareId }) => {
  return (
    <div className='completedContainer'>

      <div className='completedContainer-title'>
        Tareas completadas
      </div>
      {
        completed.length > 0
          ? completed.map(task => (
          <div key={ task._id }>
            <Task compareId={ compareId } activateDeleteSpinner={ activateDeleteSpinner } handleDeleteTask={ handleDeleteTask } task={ task }/>
          </div>
          ))
          : <IsEmpty />
      }
    </div>
  )
}

CompletedContainer.propTypes = {
  completed: PropTypes.arrayOf(Object).isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  activateDeleteSpinner: PropTypes.bool.isRequired,
  compareId: PropTypes.string.isRequired
}
