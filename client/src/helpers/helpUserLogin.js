import axios from 'axios'
const URL = 'http://localhost:3001/login'

export const helpUserLogin = (credentials) => {
  return axios
    .post(URL, credentials)
    .then(credential => credential)
    .then(response => response)
}
