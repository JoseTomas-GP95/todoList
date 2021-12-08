/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import CreateIcon from '@mui/icons-material/Create'
import SaveIcon from '@mui/icons-material/Save'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import './css/task.css'

export const TitleAndDescription = ({ taskData, handleChange, handleSubmit }) => {
  const [titleToEdit, setTitleToEdit] = useState({
    titleEditingIsActivated: false,
    inputTitle: ''
  })

  const [descriptionToEdit, setDescriptionToEdit] = useState({
    descriptionEditingIsActivated: false,
    inputDescription: ''
  })

  return (
    <div className='titleAndDescription-container'>
      <div className='titleAndDescription-content'>
        {
          titleToEdit.titleEditingIsActivated
            ? <>
              <TextField
                name='title'
                onChange={ (event) => handleChange(event) }
                style={{ width: '30vw' }}
                id="standard-basic"
                defaultValue={ taskData.title }
                variant="standard"
              />
              <IconButton onClick={() => setTitleToEdit({ ...titleToEdit, titleEditingIsActivated: false })}>
                <SaveIcon onClick={ (event) => handleSubmit(event, 'title') } />
              </IconButton>
            </>
            : <>
              <Typography variant='h2' align='center'>{ taskData.title }</Typography>
              <IconButton onClick={() => setTitleToEdit({ ...titleToEdit, titleEditingIsActivated: true })}>
                <CreateIcon />
              </IconButton>
            </>
        }
      </div>

      <div className='titleAndDescription-content2'>
        {
          descriptionToEdit.descriptionEditingIsActivated
            ? <>
              <TextField
                name='description'
                onChange={ (event) => handleChange(event) }
                style={{ width: '100%' }}
                id="description"
                multiline
                maxRows={12}
                defaultValue={ taskData.description }
              />

              <IconButton onClick={() => setDescriptionToEdit({ ...descriptionToEdit, descriptionEditingIsActivated: false })}>
                <SaveIcon onClick={ (event) => handleSubmit(event, 'description') }/>
              </IconButton>
            </>

            : <>
              <Typography variant='body1' paragraph={ true } align='center'>
                { taskData.description }
              </Typography>

              <IconButton onClick={() => setDescriptionToEdit({ ...descriptionToEdit, descriptionEditingIsActivated: true })}>
                <CreateIcon />
              </IconButton>
            </>
        }
      </div>

      <i>En el futuro, incorporamos comentarios</i>
    </div>
  )
}
