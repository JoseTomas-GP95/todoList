import React, { useState } from 'react'
import { Button, CssBaseline, TextField, Link, Grid, Typography, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import { helpCreateUser } from '../../helpers/helpCreateUser'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '../../components/General/Spinner'

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
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [activateSpinner, setActivateSpinner] = useState(false)

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
    setActivateSpinner(true)

    const user = {
      name,
      surname,
      username,
      passwordHash: password
    }

    // Validacion
    if(!name || !surname || !username || !password) {
      setMessage(<h4 style={{ color: 'red' }}>Todos los campos son obligatorios para llenar</h4>)
      setActivateSpinner(false)

      setTimeout(() => {
        setMessage('')
      }, 900)
      return
    }

    helpCreateUser(user)
      .then(res => {
        setMessage(<h4 style={{ color: 'green' }}>Tu cuenta ha sido registada con éxito 👍</h4>)
        setTimeout(() => {
          navigate('/login', { replace: true })
          setMessage('')
        }, 900)
        
        setName('')
        setSurname('')
        setUsername('')
        setPassword('')
        setActivateSpinner(false)
      }).catch(error => {

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
              { activateSpinner ? <Spinner /> : 'Registrarse' }
            </Button>

            {
              message ? message : null
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
