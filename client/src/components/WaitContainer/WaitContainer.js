import React from 'react'
import { Task } from '../Task/Task'
import { AddTask } from '../Task/AddTask'
import { IsEmpty } from '../General/IsEmpty'
import PropTypes from 'prop-types'

export const WaitContainer = ({ waiting, handleClickOpen, handleDeleteTask, activateDeleteSpinner, compareId }) => {
  return (
    <div style={{ width: '100%', borderRight: 'solid 1px grey', overflow: 'auto' }}>
      <div style={{ fontSize: '2rem', padding: '1rem', textAlign: 'center', borderBottom: 'solid 1px grey' }}>
        En espera
      </div>
      {
        waiting.length > 0
          ? waiting.map(task => (
          <div key={ task._id }>
            <Task compareId={ compareId } activateDeleteSpinner={ activateDeleteSpinner } handleDeleteTask={ handleDeleteTask } task={ task }/>
          </div>
          ))
          : <IsEmpty handleClickOpen={ handleClickOpen } waiting={ true }/>
      }

      {
        waiting.length > 0
          ? <AddTask handleClickOpen={ handleClickOpen } />
          : null
      }

    </div>
  )
}

WaitContainer.propTypes = {
  waiting: PropTypes.array.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  activateDeleteSpinner: PropTypes.bool.isRequired,
  compareId: PropTypes.string.isRequired,
  handleClickOpen: PropTypes.func.isRequired
}
