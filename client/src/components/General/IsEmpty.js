import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'

export const IsEmpty = ({ waiting, handleClickOpen }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '85%', margin: '0rem 1rem', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128
          }
        }}
      >
        <Paper style={{ width: '25vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} elevation={3}>
          <Typography variant='h6' align='center'>
            No hay tareas aquí 🤔
            <Typography style={{ color: '#990033' }} variant="caption" display="block" gutterBottom>
              <i>Usa la plataforma y ordena tus tareas de forma gratuita</i>
            </Typography>
          </Typography>

          {
            waiting ? <Button onClick={ handleClickOpen }>Agrega una nueva tarea</Button> : null
          }
        </Paper>
      </Box>
    </div>
  )
}

IsEmpty.propTypes = {
  waiting: PropTypes.bool,
  handleClickOpen: PropTypes.func
}
