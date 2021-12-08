/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// import React from 'react'
import { Task } from '../Task/Task'
import { AddTask } from '../Task/AddTask'
import { IsEmpty } from '../General/IsEmpty'

export const WaitContainer = ({ waiting, handleClickOpen, handleDeleteTask }) => {
  return (
    <div style={{ width: '100%', borderRight: 'solid 1px grey', overflow: 'auto' }}>
      <div style={{ fontSize: '2rem', padding: '1rem', textAlign: 'center', borderBottom: 'solid 1px grey' }}>
        En espera
      </div>
      {
        waiting.length > 0
          ? waiting.map(task => (
          <div key={ task._id }>
            <Task handleDeleteTask={ handleDeleteTask } task={ task }/>
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
