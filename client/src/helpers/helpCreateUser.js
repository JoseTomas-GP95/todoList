import axios from 'axios'
const URL = 'http://localhost:3001/user'

export const helpCreateUser = (userObject) => {
  return axios
    .post(URL, userObject)
    .then(user => user)
    .then(response => response)
}
