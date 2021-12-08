/* eslint-disable react/prop-types */
import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'

export const NewTask = ({ handleClose, open, handleChangeType, handleCreateTask }) => {
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
              <Grid item xs={5}>
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

              <Grid item xs={5}>
                <TextField
                  name='author'
                  onChange={ (event) => handleChangeType(event) }
                  style={{ padding: '.5rem' }}
                  margin="dense"
                  id="author"
                  label="Autor de la tarea"
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
          <Button onClick={ (event) => handleCreateTask(event) }>Crear tarea</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
