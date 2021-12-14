import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import DescriptionIcon from '@mui/icons-material/Description'
import { Link } from 'react-router-dom'
import { Spinner } from '../General/Spinner'
import PropTypes from 'prop-types'

export const Task = ({ task, handleDeleteTask, activateDeleteSpinner, compareId }) => {
  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card style={{ margin: '1.8rem', height: 'auto', display: 'flex', justifyContent: 'space-around' }} variant="outlined">
            <CardContent>
              <Typography style={{ fontSize: '.9rem' }} variant="h5" color="text.primary" component="div">
                <b>{ task?.title.toUpperCase() }</b>:
              </Typography>
              <Typography style={{ fontSize: '.9rem', marginTop: '5px' }} variant="p" color="text.primary" component="div">
                <i>{ task?.description }</i>
              </Typography>
            </CardContent>

            <CardActions style={{ width: '4vw', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
              <div style={{ width: '2.5vw', display: 'flex', justifyContent: 'center' }}>
                <Button onClick={ () => handleDeleteTask(task._id) } size="small">
                  { activateDeleteSpinner && compareId === task._id ? <Spinner size={ 15 } /> : <DeleteIcon /> }
                </Button>
              </div>

              <div style={{ width: '2.5vw', display: 'flex', justifyContent: 'center' }}>
                <Button size="small">
                  <Link to={ `/task/${task._id}` }>
                    <DescriptionIcon />
                  </Link>
                  </Button>
              </div>
            </CardActions>
        </Card>
      </Box>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  activateDeleteSpinner: PropTypes.bool.isRequired,
  compareId: PropTypes.string.isRequired
}
