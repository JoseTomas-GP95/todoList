import React from 'react'
import security from './security.svg'
import Button from '@mui/material/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Link } from 'react-router-dom'

export const AuthenticationError = () => {

  return(
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ width: '55vw', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Link to='/login'>
          <Button startIcon={<ArrowBackIosIcon />}> Iniciar sesión</Button>
        </Link>
        <h2>¡Oh, Oh! Debes iniciar sesión para acceder</h2>
      </div>
      <img width='40%' src={ security } alt='Error en autenticación' />
    </div>
  )
}