import React, { useState } from 'react'
import { Button, CssBaseline, TextField, Link, Grid, Typography, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import { helpCreateUser } from '../../helpers/helpCreateUser'

const useStyles = styled(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

// eslint-disable-next-line react/prop-types
export const Register = ({ children, ...props }) => {
  const { paper, form, submit } = useStyles(props)

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleDataUser = (event) => {
    if (event.target.name === 'name') {
      setName(event.target.value)
    }
    if (event.target.name === 'surname') {
      setSurname(event.target.value)
    }
    if (event.target.name === 'username') {
      setUsername(event.target.value)
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
  }

  const handleCreateUser = (event) => {
    event.preventDefault()

    const user = {
      name,
      surname,
      username,
      passwordHash: password
    }

    helpCreateUser(user)
      .then(res => {
        setMessage('Tu cuenta ha sido registada con éxito 👍')
        setTimeout(() => {
          setMessage('')
        }, 3000)

        setName('')
        setSurname('')
        setUsername('')
        setPassword('')
      })
  }

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container style={{ border: '.5px grey solid', padding: '4rem', display: 'flex', justifyContent: 'space-around' }} component="main" maxWidth="md">
        <CssBaseline />
        <div className={paper}>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>

          <form onSubmit={ handleCreateUser } className={form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={ name }
                  onChange={ (event) => handleDataUser(event) }
                  autoComplete="fname"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={ surname }
                  onChange={ (event) => handleDataUser(event) }
                  variant="outlined"
                  required
                  fullWidth
                  id="surname"
                  label="Apellido"
                  name="surname"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={ username }
                  onChange={ (event) => handleDataUser(event) }
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Elige un nombre de usuario 😊"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={ password }
                  onChange={ (event) => handleDataUser(event) }
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={submit}
            >
              Registrarse
            </Button>
            {
              message ? <h4 style={{ color: 'green' }}>{ message }</h4> : null
            }

            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  ¿Ya tienes una cuenta? 🤔
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  )
}
