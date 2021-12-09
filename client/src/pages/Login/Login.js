/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Button, CssBaseline, TextField, Link, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { helpUserLogin } from '../../helpers/helpUserLogin'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '../../components/General/Spinner'

const useStyles = styled(theme => ({
  root: {
    height: '100vh'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export const Login = ({ ...props }) => {
  const { root, paper, form, submit } = useStyles(props)
  const [activateSpinner, setActivateSpinner] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handleDataUser = (event) => {
    if (event.target.name === 'username') {
      setUsername(event.target.value)
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
  }

  const handleLogin = (event) => {
    event.preventDefault()
    setActivateSpinner(true)

    const credential = {
      username,
      password
    }

    helpUserLogin(credential)
      .then(user => {
        window.localStorage.setItem(
          'loggedTaskAppUser', JSON.stringify(user)
        )
        props.setUser(user)

        if (user) {
          navigate('/workspace', { replace: true })
        }

        setUsername('')
        setPassword('')
        setActivateSpinner(false)
      }).catch(error => {
        setActivateSpinner(false)
        setErrorMessage('Credenciales inválidas ❌ Intenta de nuevo')
        setTimeout(() => {
          setErrorMessage('')
        }, 2000)
      })
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedTaskAppUser')

    if (loggedUserJSON) {
      const userParse = JSON.parse(loggedUserJSON)
      props.setUser(userParse)
    }
  }, [])

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid style={{ padding: '3rem', border: '.2px solid grey' }} component="main" className={root}>
      <CssBaseline />
      <Grid item>
        <div className={paper}>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>

          <form onSubmit={ handleLogin } className={form} noValidate>
            <TextField
              value={ username }
              onChange={ (event) => handleDataUser(event) }
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nombre de usuario"
              name="username"
              autoFocus
              autoComplete="username"
            />
            <TextField
              value={ password }
              onChange={ (event) => handleDataUser(event) }
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={submit}
            >
              { activateSpinner ? <Spinner /> : 'Iniciar sesión' }
            </Button>
            {
              errorMessage ? <p style={{ color: 'red' }}>{ errorMessage }</p> : null
            }
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  ¿No tienes una cuenta aún?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  </div>

  )
}
