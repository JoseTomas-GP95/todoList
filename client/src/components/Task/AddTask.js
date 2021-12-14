import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import PropTypes from 'prop-types'

export const AddTask = ({ handleClickOpen }) => {
  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card
          style={{
            margin: '1.8rem',
            height: '3rem',
            display: 'flex',
            justifyContent: 'space-around'
          }}
          variant="outlined"
        >
          <CardActions>
            <div>
              <Button onClick={ handleClickOpen } size="small">
                <AddIcon />Agrega una nueva tarea
              </Button>
            </div>
          </CardActions>
        </Card>
      </Box>
    </div>
  )
}

AddTask.propTypes = {
  handleClickOpen: PropTypes.func.isRequired
}
