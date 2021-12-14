import React from 'react'
import { Task } from '../Task/Task'
import { IsEmpty } from '../General/IsEmpty'
import './css/inProcessContainer.css'
import PropTypes from 'prop-types'

export const InProcessContainer = ({ process, handleDeleteTask, activateDeleteSpinner, compareId }) => {
  return (
    <div className='inProcessContainer'>
      <div className='inProcessContainer-title'>
        En proceso
      </div>
      {
        process.length > 0
          ? process.map(task => (
          <div key={ task._id }>
            <Task compareId={ compareId } activateDeleteSpinner={ activateDeleteSpinner } handleDeleteTask={ handleDeleteTask } task={ task }/>
          </div>
          ))
          : <IsEmpty />
      }
    </div>
  )
}

InProcessContainer.propTypes = {
  process: PropTypes.array,
  handleDeleteTask: PropTypes.func.isRequired,
  activateDeleteSpinner: PropTypes.bool.isRequired,
  compareId: PropTypes.string.isRequired
}
