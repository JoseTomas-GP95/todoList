import React from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { OtherUsersCanSee } from './OtherUsersCanSee'
import PropTypes from 'prop-types'

export const ImageAndUsers = ({ user }) => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img width='75%' src='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg' alt='x' />
      </div>

      <div>
        <Typography variant='h4' align='center'>Creado por:</Typography>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2021/10/31/16/53/squid-game-6758082_960_720.png" />
          <i><Typography variant='h5' align='center'>{ user?.data?.name.toUpperCase() }</Typography></i>
        </div>
      </div>

      <OtherUsersCanSee />
    </div>
  )
}

ImageAndUsers.propTypes = {
  user: PropTypes.array.isRequired
}
