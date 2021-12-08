import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { helpGetTypeTasks } from '../../helpers/helpGetTypeTasks'
import { helpPostTask } from '../../helpers/helpPostTask'
import { helpDeleteTypeTasks } from '../../helpers/helpDeleteTypeTasks'
import { NewTask } from './NewTask'
import { CompletedContainer } from '../CompletedContainer/CompletedContainer'
import { InProcessContainer } from '../InProcessContainer/InProcessContainer'
import { WaitContainer } from '../WaitContainer/WaitContainer'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export const StatusContainer = () => {
  const [waiting, setWaiting] = useState([])
  const [process, setProcess] = useState([])
  const [completed, setCompleted] = useState([])
  const [open, setOpen] = React.useState(false)

  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [sendPost, setSendPost] = React.useState('')
  const [user, setUser] = React.useState('')
  const [userId, setUserId] = React.useState('')
  const navigate = useNavigate()
  /* ------------------- CREAR STATES DE LA NUEVA TAREA AQUI ------------------ */
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChangeType = (event) => {
    if (event.target.name === 'title') setTitle(event.target.value)

    if (event.target.name === 'author') setAuthor(event.target.value)

    if (event.target.name === 'description') setDescription(event.target.value)
  }

  const handleCreateTask = (event) => {
    event.preventDefault()

    const toPost = {
      title,
      author,
      description
    }

    const token = user?.data?.token

    helpPostTask(token, toPost)
      .then(response => {
        setSendPost(toPost.title)
        setTitle('')
        setAuthor('')
        setDescription('')
        setOpen(false)
      })
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedTaskAppUser')

    if (loggedUserJSON) {
      const userParse = JSON.parse(loggedUserJSON)
      if (userParse.status === 200) {
        setUser(userParse)
        setUserId(userParse?.data?.id)
      }
    }
  }, [])

  const handleDeleteTask = (_id) => {
    helpDeleteTypeTasks(`http://localhost:3001/task/${_id}`)
      .then(response => {
        setSendPost(_id)
      })
  }

  useEffect(() => {
    helpGetTypeTasks(`http://localhost:3001/tasks/${userId}/waiting`)
      .then(response => setWaiting(response.data))

    helpGetTypeTasks(`http://localhost:3001/tasks/${userId}/process`)
      .then(response => setProcess(response.data))

    helpGetTypeTasks(`http://localhost:3001/tasks/${userId}/completed`)
      .then(response => setCompleted(response.data))
  }, [sendPost, userId])

  const handleLogout = () => {
    setUser(null)
    const storage = window.localStorage.removeItem('loggedTaskAppUser')

    setUser(null)
    setUserId(null)
    setWaiting(null)
    setProcess(null)
    setCompleted(null)
    if (!storage) {
      navigate('/login', { replace: true })
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128
        }
      }}
    >
      <div style={{ backgroundColor: 'grey', width: '100%', height: '8vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ color: 'white', width: '60vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          { `Hola ${user?.data?.name}, te damos la bienvenida 😀🖐️` }
        </h1>

        <Button onClick={ handleLogout } variant="contained" color="error">
          Cerrar sesión
        </Button>
      </div>
      <Paper style={{ width: '85vw', height: '85vh', display: 'flex', justifyContent: 'space-around' }}>
        <WaitContainer
          handleDeleteTask={ handleDeleteTask }
          waiting={ waiting }
          handleClickOpen={ handleClickOpen }
        />

        <InProcessContainer
          handleDeleteTask={ handleDeleteTask }
          process={ process }
          />

        <CompletedContainer
          handleDeleteTask={ handleDeleteTask }
          completed={ completed }
          />

        <NewTask
          handleCreateTask={ handleCreateTask }
          handleChangeType={ handleChangeType }
          open={ open }
          handleClickOpen={ handleClickOpen }
          handleClose={ handleClose }
        />
      </Paper>
    </Box>
  )
}
