import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import { Spinner } from '../General/Spinner'
import PropTypes from 'prop-types'

export const NewTask = ({ handleClose, open, handleChangeType, handleCreateTask, activateCreateTaskSpinner, errorMessage }) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nueva Tarea</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Piensa bien un titulo sólido, y una descripción 😉
          </DialogContentText>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid style={{ display: 'flex', justifyContent: 'space-around' }} item xs={12}>
              <Grid item xs={8}>
                <TextField
                  name='title'
                  onChange={ (event) => handleChangeType(event) }
                  style={{ padding: '.5rem' }}
                  autoFocus
                  margin="dense"
                  id="title"
                  label="Titulo de la tarea"
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </Grid>
            </Grid>

            <Grid item xs={8}>
              <TextField
                name='description'
                onChange={ (event) => handleChangeType(event) }
                style={{ width: '100%' }}
                id="description"
                label="Describe la tarea"
                multiline
                maxRows={12}
                // value={value}
              />
            </Grid>

          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Mejor no</Button>
          <Button onClick={ (event) => handleCreateTask(event) }>
            { activateCreateTaskSpinner ? <Spinner size={ 20 } /> : 'Crear tarea' }
          </Button>
        </DialogActions>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            { errorMessage ? <h4 style={{ color: 'red' }}>{ errorMessage }</h4> : null }
          </div>
      </Dialog>
    </div>
  )
}

NewTask.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleChangeType: PropTypes.func.isRequired,
  handleCreateTask: PropTypes.func.isRequired,
  activateCreateTaskSpinner: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired
}
