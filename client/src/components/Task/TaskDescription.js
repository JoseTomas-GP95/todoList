import React, { useState, useEffect } from 'react'
import { TitleAndDescription } from './TitleAndDescription'
import { ImageAndUsers } from './ImageAndUsers'
import { useParams } from 'react-router-dom'
import { helpGetOneTask } from '../../helpers/helpGetOneTask'
import { helpPutOneTask } from '../../helpers/helpPutOneTask'
import { TaskState } from './TaskState'

export const TaskDescription = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    author: '',
    state: ''
  })
  const [weNeedRenderingData, setWeNeedRenderingData] = useState(true)
  const [oneTask, setOneTask] = useState([])
  const [user, setUser] = useState([])

  const params = useParams()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedTaskAppUser')

    if (loggedUserJSON) {
      const userParse = JSON.parse(loggedUserJSON)
      setUser(userParse)
    }

    if (weNeedRenderingData) {
      helpGetOneTask(`http://localhost:3001/task/${params.taskId}`)
        .then(response => setTaskData({
          title: response.data.title,
          description: response.data.description,
          author: response.data.author,
          state: response.data.state
        }))

      setWeNeedRenderingData(false)
    }
  }, [params.taskId, taskData, oneTask])

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event, infoType, newState = null) => {
    event.preventDefault()
    setWeNeedRenderingData(true)
    const toSend = {}

    if (infoType === 'description') toSend[infoType] = taskData.description
    if (infoType === 'title') toSend[infoType] = taskData.title
    if (infoType === 'state') toSend[infoType] = newState
    helpPutOneTask(`http://localhost:3001/task/${params.taskId}`, toSend)
      .then(res => setOneTask(res))
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '35%', height: '100vh' }}>
        <ImageAndUsers user={ user } taskData={ taskData }/>
      </div>
      <div style={{ width: '50%', height: '100vh' }}>
        <TitleAndDescription handleSubmit={ handleSubmit } handleChange={ handleChange } taskData={ taskData } />
      </div>
      <div style={{ width: '20%', border: '0.1px solid grey' }}>
        <TaskState handleSubmit={ handleSubmit } taskData={ taskData }/>
      </div>
    </div>
  )
}
