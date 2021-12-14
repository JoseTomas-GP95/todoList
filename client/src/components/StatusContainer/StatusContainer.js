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
import { Spinner } from '../General/Spinner'
import { addressThatIUse } from '../../URL/URL'

export const StatusContainer = () => {
  const [waiting, setWaiting] = useState([])
  const [process, setProcess] = useState([])
  const [completed, setCompleted] = useState([])
  const [open, setOpen] = React.useState(false)
  const [activateSpinner, setActivateSpinner] = useState(false)
  const [activateCreateTaskSpinner, setActivateCreateTaskSpinner] = useState(false)
  const [activateDeleteSpinner, setActivateDeleteSpinner] = useState(false)
  const [compareId, setCompareId] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [sendPost, setSendPost] = React.useState('')
  const [user, setUser] = React.useState('')
  const [userId, setUserId] = React.useState('')
  const navigate = useNavigate()
  const currentAddress = addressThatIUse()
  /* ------------------- CREAR STATES DE LA NUEVA TAREA AQUI ------------------ */
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChangeType = (event) => {
    if (event.target.name === 'title') setTitle(event.target.value)

    if (event.target.name === 'description') setDescription(event.target.value)
  }

  const handleCreateTask = (event) => {
    event.preventDefault()
    setActivateCreateTaskSpinner(true)

    if (!title || !description) {
      setErrorMessage('Debes llenar todos los datos')

      setTimeout(() => {
        setErrorMessage('')
      }, 2000)
      setActivateCreateTaskSpinner(false)
      return
    }

    const toPost = {
      title,
      author: user?.data?.name,
      description
    }

    const token = user?.data?.token

    helpPostTask(token, toPost)
      .then(response => {
        setActivateCreateTaskSpinner(false)
        setSendPost(toPost.title)
        setTitle('')
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
    setActivateDeleteSpinner(true)
    setCompareId(_id)
    helpDeleteTypeTasks(`${currentAddress}/task/${_id}`)
      .then(response => {
        setActivateDeleteSpinner(false)
        setSendPost(_id)
      })
  }

  useEffect(() => {
    helpGetTypeTasks(`${currentAddress}/tasks/${userId}/waiting`)
      .then(response => setWaiting(response.data))

    helpGetTypeTasks(`${currentAddress}/tasks/${userId}/process`)
      .then(response => setProcess(response.data))

    helpGetTypeTasks(`${currentAddress}/tasks/${userId}/completed`)
      .then(response => setCompleted(response.data))
  }, [sendPost, userId])

  const handleLogout = () => {
    setActivateSpinner(true)
    setUser(null)
    const storage = window.localStorage.removeItem('loggedTaskAppUser')

    setUser(null)
    setUserId(null)
    setWaiting(null)
    setProcess(null)
    setCompleted(null)
    if (!storage) {
      setActivateSpinner(true)
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
          { activateSpinner ? <Spinner /> : 'Cerrar sesión' }
        </Button>
      </div>
      <Paper style={{ width: '85vw', height: '85vh', display: 'flex', justifyContent: 'space-around' }}>
        <WaitContainer
          compareId={ compareId }
          activateDeleteSpinner={ activateDeleteSpinner }
          handleDeleteTask={ handleDeleteTask }
          waiting={ waiting }
          handleClickOpen={ handleClickOpen }
        />

        <InProcessContainer
          compareId={ compareId }
          activateDeleteSpinner={ activateDeleteSpinner }
          handleDeleteTask={ handleDeleteTask }
          process={ process }
          />

        <CompletedContainer
          compareId={ compareId }
          activateDeleteSpinner={ activateDeleteSpinner }
          handleDeleteTask={ handleDeleteTask }
          completed={ completed }
          />

        <NewTask
          errorMessage={ errorMessage }
          activateCreateTaskSpinner={ activateCreateTaskSpinner }
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
