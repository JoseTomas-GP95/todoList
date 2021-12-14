import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import pending from '../../images/pending.svg'
import process from '../../images/process.svg'
import completed from '../../images/completed.svg'
import SendIcon from '@mui/icons-material/Send'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import './css/task.css'
import PropTypes from 'prop-types'

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}))

export const TaskState = ({ taskData, handleSubmit }) => {
  const [stateTypes] = useState([
    { id: 'waiting', name: 'Pendiente', image: pending, color: '#ffa43a' },
    { id: 'process', name: 'En proceso', image: process, color: '#759eff' },
    { id: 'completed', name: 'Completada', image: completed, color: 'green' }
  ])

  const stateToView = stateTypes.filter(state => state.id !== taskData.state)
  const actualState = stateTypes.filter(state => state.id === taskData.state)

  return (
    <div className='taskState-container'>
      <div className='taskState-subcontainer'>
        <b><h3>Estado actual de la tarea: </h3></b>
        <h2 style={{ color: actualState[0]?.color, fontWeight: '950' }}>{ actualState[0]?.name }</h2>
        <img width='45%' src={ actualState[0]?.image } alt={ actualState[0]?.name } />
      </div>

      <div className='taskState-stateTask'>
        <h3>Actualizar estado de la tarea</h3>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avanza con tu tarea
          </Typography>
          <Demo>
            <List dense={false}>
              {
                stateToView.map(typeState => (
                  <ListItem
                    key={ typeState.id }
                    secondaryAction={
                      <IconButton onClick={ (event) => handleSubmit(event, 'state', typeState.id) } edge="end" aria-label="delete">
                        <SendIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <img width='80%' src={ typeState.image } alt={ typeState.name }/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={ typeState.name }
                    />
                  </ListItem>
                ))
              }
            </List>
          </Demo>
        </Grid>
        <Link to='/workspace'>
          <Button variant="outlined" startIcon={<ArrowBackIosIcon />}>IR ATRÁS</Button>
        </Link>
      </div>
    </div>
  )
}

TaskState.propTypes = {
  taskData: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
